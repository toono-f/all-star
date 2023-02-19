import { createClient } from "@supabase/supabase-js";

/* eslint-disable */
export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
