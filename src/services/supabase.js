import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ukstxecpazjdfqwoozlo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrc3R4ZWNwYXpqZGZxd29vemxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4ODc5NTgsImV4cCI6MjA1MjQ2Mzk1OH0.MfuQgSqDhn6BplFunX4XWo5BKRh4vgIf6jjfTbpoZfU";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
