-- 1. Create tables
create table public.photos_metadata (
  photo_id text primary key,
  views_count bigint default 0,
  likes_count bigint default 0
);

create table public.comments (
  id uuid default gen_random_uuid() primary key,
  photo_id text not null,
  content text not null,
  author_alias text,
  visitor_id text not null, -- generated browser fingerprint
  is_approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.likes (
  photo_id text not null,
  visitor_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (photo_id, visitor_id)
);

create table public.views (
  id uuid default gen_random_uuid() primary key,
  photo_id text not null,
  visitor_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable RLS (Security)
alter table public.photos_metadata enable row level security;
alter table public.comments enable row level security;
alter table public.likes enable row level security;
alter table public.views enable row level security;

-- 3. Policies
-- Metadata: Everyone can read
create policy "Allow public read metadata" on public.photos_metadata for select using (true);

-- Comments: Everyone can insert, but only read APPROVED ones
create policy "Allow public insert comments" on public.comments for insert with check (true);
create policy "Allow public read approved comments" on public.comments for select using (is_approved = true);

-- Likes: Public insert/delete (toggle), but restricted by visitor_id logic in app
create policy "Allow public insert likes" on public.likes for insert with check (true);
create policy "Allow public read likes" on public.likes for select using (true);
create policy "Allow public delete own likes" on public.likes for delete using (true); -- simplified for anon

-- Views: Insert only
create policy "Allow public insert views" on public.views for insert with check (true);


-- 4. SPAM PREVENTION & AUTOMATION TRIGGERS

-- Function: Limit comments to 1 per 2 minutes per visitor_id
create or replace function check_comment_spam() returns trigger as $$
begin
  if exists (
    select 1 from public.comments 
    where visitor_id = new.visitor_id 
    and created_at > (now() - interval '2 minutes')
  ) then
    raise exception 'Slow down! granular rate limit exceeded.';
  end if;
  return new;
end;
$$ language plpgsql;

create trigger tr_check_comment_spam
before insert on public.comments
for each row execute function check_comment_spam();

-- Function: Auto-increment counts
create or replace function update_metrics() returns trigger as $$
begin
  if (TG_OP = 'INSERT') then
    if (TG_TABLE_NAME = 'likes') then
      insert into public.photos_metadata (photo_id, likes_count) values (new.photo_id, 1)
      on conflict (photo_id) do update set likes_count = photos_metadata.likes_count + 1;
    elsif (TG_TABLE_NAME = 'views') then
      insert into public.photos_metadata (photo_id, views_count) values (new.photo_id, 1)
      on conflict (photo_id) do update set views_count = photos_metadata.views_count + 1;
    end if;
  elsif (TG_OP = 'DELETE' and TG_TABLE_NAME = 'likes') then
    update public.photos_metadata set likes_count = likes_count - 1 where photo_id = old.photo_id;
  end if;
  return null;
end;
$$ language plpgsql security definer;

create trigger tr_update_likes
after insert or delete on public.likes
for each row execute function update_metrics();

create trigger tr_update_views
after insert on public.views
for each row execute function update_metrics();
