import { createClient } from '@supabase/supabase-js';

const url = "https://hjlgbhubjtquybvhrind.supabase.co";
const APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbGdiaHVianRxdXlidmhyaW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNjU4MDYsImV4cCI6MjAxNDY0MTgwNn0.LKZKYUq1oxyw8V4RVOP09_UkfPofGOn1fMCtypJlZ8A";

// establish a client connection to superbase
const database = createClient(url, APIKEY);

export default database;