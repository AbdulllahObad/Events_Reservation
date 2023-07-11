import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nvyrjccsfhmwgfyxmadz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52eXJqY2NzZmhtd2dmeXhtYWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzMzQ3NjgsImV4cCI6MjAwMzkxMDc2OH0.Fl1MbK-OhIwOVHLiseVQeOi-7zuESXcqCbJ2PQBcNmU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default  async function getEvents() {
       const { data, error } = await supabase.from('events').select('*');
       if (error) {
         console.error('Error fetching events:', error);
         return null;
       }
       return data;
     }
     
