-- EL IMPERIO MONARCA by I DO NAILS
-- Esquema inicial. Ejecutar en Supabase SQL Editor y revisar las políticas antes de producción.
create extension if not exists pgcrypto;
create table if not exists public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 full_name text, phone text,
 role text not null default 'customer' check(role in ('customer','admin','reception','professional','store_manager')),
 created_at timestamptz not null default now()
);
create table if not exists public.service_categories (
 id text primary key, name text not null, description text
);
create table if not exists public.services (
 id text primary key, category_id text references public.service_categories(id),
 name text not null, description text, price_from numeric(12,2), price_label text,
 duration_minutes integer, image_url text, active boolean not null default true
);
create table if not exists public.brands (
 id uuid primary key default gen_random_uuid(), name text not null unique, active boolean not null default true
);
create table if not exists public.product_categories (
 id uuid primary key default gen_random_uuid(), name text not null unique
);
create table if not exists public.products (
 id uuid primary key default gen_random_uuid(), brand_id uuid references public.brands(id),
 category_id uuid references public.product_categories(id), name text not null,
 description text, sku text unique, price numeric(12,2), stock integer not null default 0,
 image_url text, active boolean not null default true, created_at timestamptz not null default now()
);
create table if not exists public.staff (
 id uuid primary key default gen_random_uuid(), profile_id uuid references public.profiles(id),
 display_name text not null, active boolean not null default true
);
create table if not exists public.staff_schedules (
 id uuid primary key default gen_random_uuid(), staff_id uuid not null references public.staff(id) on delete cascade,
 weekday smallint not null check(weekday between 0 and 6), start_time time not null, end_time time not null,
 active boolean not null default true
);
create table if not exists public.appointments (
 id uuid primary key default gen_random_uuid(), customer_id uuid references public.profiles(id),
 service_id text not null references public.services(id), staff_id uuid references public.staff(id),
 customer_name text not null, customer_phone text not null, starts_at timestamptz not null,
 ends_at timestamptz, status text not null default 'requested'
 check(status in ('requested','confirmed','cancelled','completed','no_show')),
 notes text, created_at timestamptz not null default now()
);
create table if not exists public.orders (
 id uuid primary key default gen_random_uuid(), customer_id uuid references public.profiles(id),
 customer_name text not null, customer_phone text not null,
 status text not null default 'pending' check(status in ('pending','paid','preparing','shipped','completed','cancelled')),
 subtotal numeric(12,2) not null default 0, created_at timestamptz not null default now()
);
create table if not exists public.order_items (
 id uuid primary key default gen_random_uuid(), order_id uuid not null references public.orders(id) on delete cascade,
 product_id uuid references public.products(id), product_name text not null,
 quantity integer not null check(quantity > 0), unit_price numeric(12,2)
);
alter table public.profiles enable row level security;
alter table public.service_categories enable row level security;
alter table public.services enable row level security;
alter table public.brands enable row level security;
alter table public.product_categories enable row level security;
alter table public.products enable row level security;
alter table public.staff enable row level security;
alter table public.staff_schedules enable row level security;
alter table public.appointments enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
create policy "Public read active services" on public.services for select using(active=true);
create policy "Public read service categories" on public.service_categories for select using(true);
create policy "Public read active products" on public.products for select using(active=true);
create policy "Public read product categories" on public.product_categories for select using(true);
create policy "Public read active brands" on public.brands for select using(active=true);
create policy "Users read own profile" on public.profiles for select using(auth.uid()=id);
create policy "Users update own profile" on public.profiles for update using(auth.uid()=id);
-- Completar políticas de citas, pedidos y administración antes del despliegue público.
-- Nunca incluir la service_role key en el frontend.
