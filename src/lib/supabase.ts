import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vxwiladblclfmranafrq.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_rC6-CQ80zJD1qa3izJWkeg_fG_6uXyc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);