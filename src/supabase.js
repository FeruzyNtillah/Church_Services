import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fklogecupjjwcmiiibkn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbG9nZWN1cGpqd2NtaWlpYmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMjczODIsImV4cCI6MjA2MzkwMzM4Mn0.hB6QhMfs9FuQTTcdg1A9e95UFFDuv1yz_bxQi2tHofA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
