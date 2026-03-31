-- Referral system for Buddy
-- Run this in the Supabase SQL Editor

-- Table: referral codes (one per user)
create table if not exists public.referral_codes (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  code         text not null unique,
  created_at   timestamptz not null default now(),
  constraint referral_codes_user_id_unique unique (user_id)
);

-- Table: referral uses (when a referred user completes a purchase)
create table if not exists public.referral_uses (
  id              uuid primary key default gen_random_uuid(),
  referral_code   text not null references public.referral_codes(code) on delete cascade,
  referred_user   uuid references auth.users(id) on delete set null,
  stripe_session  text,
  rewarded        boolean not null default false,
  created_at      timestamptz not null default now()
);

-- RLS: users can only read their own referral code
alter table public.referral_codes enable row level security;

create policy "Users can view own code"
  on public.referral_codes for select
  using (auth.uid() = user_id);

create policy "Users can insert own code"
  on public.referral_codes for insert
  with check (auth.uid() = user_id);

-- RLS: users can see referrals they generated
alter table public.referral_uses enable row level security;

create policy "Referrer can view their uses"
  on public.referral_uses for select
  using (
    referral_code in (
      select code from public.referral_codes where user_id = auth.uid()
    )
  );

-- Function: auto-generate a code when a user signs up
create or replace function public.handle_new_user_referral()
returns trigger language plpgsql security definer as $$
declare
  new_code text;
begin
  -- Generate a short readable code: first 4 chars of user id + 4 random chars
  new_code := upper(substring(replace(new.id::text, '-', ''), 1, 4) ||
                    substring(md5(random()::text), 1, 4));

  insert into public.referral_codes (user_id, code)
  values (new.id, new_code)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

-- Trigger: run after each new user
drop trigger if exists on_auth_user_created_referral on auth.users;
create trigger on_auth_user_created_referral
  after insert on auth.users
  for each row execute procedure public.handle_new_user_referral();
