import { useEffect, useState } from 'react';
import  {getEvents} from '../lib/supabase';

export default function EventList() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    async function fetchEventData() {
      const eventData = await getEvents();
      setEvents(eventData);
    }

    fetchEventData();
  }, []);

  if (events === null) {
    return <div>Loading...</div>;
  }

  return (
       <div>
       <h2>Events</h2>
       <ul>
         {events.map((event) => (
           <li key={event.id}>
             <h3>{event.name}</h3>
             <p>City: {event.city}</p>
             <p>Date: {event.date}</p>
             <p>Price: {event.price}</p>
             <p>Description: {event.description}</p>
             <hr />
           </li>
         ))}
       </ul>
     </div>
  );
}

