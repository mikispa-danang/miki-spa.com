-- Miki V3 Growth CRM schema
-- Apply through Supabase migrations. Public clients should NOT write these tables directly.

create extension if not exists pgcrypto;

create table if not exists public.miki_leads (
  id uuid primary key default gen_random_uuid(),
  external_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  contact text not null,
  channel text,
  service text,
  language text,
  status text not null default 'new' check (status in ('new','contacted','qualified','booked','visited','review','lost')),
  visitor_id text,
  session_id text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  referrer text,
  landing text,
  last_page text,
  consent_at timestamptz,
  assigned_to uuid references auth.users(id) on delete set null,
  notes text
);

create table if not exists public.miki_bookings (
  id uuid primary key default gen_random_uuid(),
  external_id text unique,
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  service text,
  price text,
  appointment_date date,
  appointment_time text,
  contact_channel text,
  note text,
  language text,
  visitor_id text,
  session_id text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  landing text,
  status text not null default 'requested' check (status in ('requested','confirmed','completed','cancelled','no_show'))
);

create table if not exists public.miki_events (
  id uuid primary key default gen_random_uuid(),
  external_id text unique,
  created_at timestamptz not null default now(),
  event_name text not null,
  visitor_id text,
  session_id text,
  language text,
  path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  event_data jsonb not null default '{}'::jsonb
);

create index if not exists miki_leads_created_idx on public.miki_leads(created_at desc);
create index if not exists miki_leads_status_idx on public.miki_leads(status);
create index if not exists miki_leads_service_idx on public.miki_leads(service);
create index if not exists miki_bookings_created_idx on public.miki_bookings(created_at desc);
create index if not exists miki_bookings_status_idx on public.miki_bookings(status);
create index if not exists miki_events_created_idx on public.miki_events(created_at desc);
create index if not exists miki_events_name_idx on public.miki_events(event_name);
create index if not exists miki_events_session_idx on public.miki_events(session_id);

alter table public.miki_leads enable row level security;
alter table public.miki_bookings enable row level security;
alter table public.miki_events enable row level security;

-- Intentionally no anonymous INSERT/SELECT policies.
-- Public website submissions should go through a validated Edge Function using server-side credentials.

create or replace function public.miki_set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_miki_leads_updated_at on public.miki_leads;
create trigger trg_miki_leads_updated_at
before update on public.miki_leads
for each row execute function public.miki_set_updated_at();
