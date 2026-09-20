-- Allow pre-authorizing CRM staff by verified auth email.
-- RLS still requires an authenticated Supabase session.

alter table public.miki_crm_staff add column if not exists id uuid default gen_random_uuid();
update public.miki_crm_staff set id = gen_random_uuid() where id is null;
alter table public.miki_crm_staff alter column id set not null;
alter table public.miki_crm_staff drop constraint if exists miki_crm_staff_pkey;
alter table public.miki_crm_staff add constraint miki_crm_staff_pkey primary key (id);
alter table public.miki_crm_staff alter column user_id drop not null;

create unique index if not exists miki_crm_staff_user_unique
  on public.miki_crm_staff (user_id) where user_id is not null;
create unique index if not exists miki_crm_staff_email_unique
  on public.miki_crm_staff (lower(email)) where email is not null;

create or replace function public.is_miki_staff()
returns boolean
language sql
stable
security definer
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
    (user_id is not null and user_id = auth.uid())
    or
    (email is not null and lower(email) = lower(coalesce(auth.jwt() ->> 'email','')))
  )
);

insert into public.miki_crm_staff (email,role,active)
values ('namanhuan@gmail.com','owner',true)
on conflict ((lower(email))) where email is not null
do update set role='owner',active=true;
