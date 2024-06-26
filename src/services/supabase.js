import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mqffjydpuqhjzqfsgdtg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZmZqeWRwdXFoanpxZnNnZHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxOTQ1NDgsImV4cCI6MjAzNDc3MDU0OH0.-drgj00yzIqk1eG_oQp-8rv3BD_FeN2wLZEBiNJUi1w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
