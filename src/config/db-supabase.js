const { createClient } = require('@supabase/supabase-js');

// Ambil URL dan Kunci dari environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Inisialisasi Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
