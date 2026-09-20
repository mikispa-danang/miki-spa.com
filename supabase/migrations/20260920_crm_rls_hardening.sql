-- Harden CRM staff authorization and optimize RLS auth lookups.

create or replace function public.is_miki_staff()
returns boolean
language sql
stable
security invoker
set search_path = public
as $$
  select exists (
    select 1
    from public.miki_crm_staff s
    where s.active = true
      and (
        (s.user_id is not null and s.user_id = auth.uid())
        or
        (s.email is not null and lower(s.email) = lower(coalesce(auth.jwt() ->> 'email','')))
      )
  );
$$;

alter policy staff_read_self on public.miki_crm_staff
using (
  active = true
  and (
    (user_id is not null and user_id = (select auth.uid()))
    or
    (email is not null and lower(email) = lower(coalesce((select auth.jwt() ->> 'email'),'')))
  )
);
