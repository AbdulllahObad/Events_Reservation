import { supabase } from './lib/supabase'; // Update the import statement

export async function createEvent(eventData) {
  const { data, error } = await supabase
    .from('events')
    .insert(eventData);

  if (error) {
    console.error('Error creating event:', error);
  }

  return data;
}

export async function fetchEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*');

  if (error) {
    console.error('Error fetching events:', error);
  }

  return data;
}