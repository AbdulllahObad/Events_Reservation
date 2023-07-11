import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';




const EventDetailPage = () => {

  const supabase = createClient('https://nvyrjccsfhmwgfyxmadz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52eXJqY2NzZmhtd2dmeXhtYWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzMzQ3NjgsImV4cCI6MjAwMzkxMDc2OH0.Fl1MbK-OhIwOVHLiseVQeOi-7zuESXcqCbJ2PQBcNmU');
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    async function fetchEventDetails() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('id', eventId)
          .single();
        if (error) {
          throw new Error(error.message);
        }
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    }
  
    fetchEventDetails();
  }, [eventId, supabase]);

  if (!event) {
    return <div>{eventId}</div>;
  }
  console.log(event);
  // Render the event details
  return (
  <Layout> 
  <div>
    <div
      className="bg-image"
      style={{
        backgroundImage: `url(${event.image})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '300px',
      }}
    ></div>
    <div className="container mt-4">
      <div className="row">
      <div className="col-md-6">
           <h1>Description</h1>

         <span class="border">{event.description}</span>
          {/* Render the paragraph on the right side */}
        </div>
        <div className="col-md-6">
          <h2>{event.name}</h2>
          <p>
          <strong>Created Date:</strong> {event.created_at}
        </p>
        <p>
          <strong>Updated Date:</strong> {event.updated_at}
        </p>
        <p>
          <strong>Category:</strong> {event.category}
        </p>
        <Link to="/Auth" className="btn btn-primary">Subscribe</Link>
        </div>
      </div>
    </div>
  </div>
  </Layout>
  );
};

export default EventDetailPage;