/*
# Create day_pass_bookings table (single-tenant, no auth)

1. New Tables
- `day_pass_bookings`
  - `id` (uuid, primary key)
  - `name` (text, not null) — visitor full name
  - `phone` (text, not null) — visitor phone number
  - `preferred_time` (text, not null) — preferred visit hour (HH:MM)
  - `status` (text, default 'pending') — booking status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `day_pass_bookings`.
- Allow anon + authenticated CRUD because the data is intentionally public
  (anyone visiting the landing page can request a free day pass without signing in).
*/

CREATE TABLE IF NOT EXISTS day_pass_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  preferred_time text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE day_pass_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON day_pass_bookings;
CREATE POLICY "anon_select_bookings"
ON day_pass_bookings FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON day_pass_bookings;
CREATE POLICY "anon_insert_bookings"
ON day_pass_bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON day_pass_bookings;
CREATE POLICY "anon_update_bookings"
ON day_pass_bookings FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON day_pass_bookings;
CREATE POLICY "anon_delete_bookings"
ON day_pass_bookings FOR DELETE
TO anon, authenticated USING (true);
