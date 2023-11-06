import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_APP_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_APP_SUPABASE_APIKEY;

// establish a client connection to superbase
const database = createClient(url, APIKEY);

export default database;