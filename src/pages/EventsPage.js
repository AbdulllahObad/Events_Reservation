// event/index.js
import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import getEvent from '../lib/supabase'; // Import the getEvent function from Supabase
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


function Event() {  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const eventData = await  getEvent();
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEventData();
  }, []);
  return (
    <Layout>
    <div
      className="bg-image d-flex flex-column justify-content-end align-items-center"
      style={{
        backgroundImage: 'url(https://i0.wp.com/www.bucketlistfanatic.com/wp-content/uploads/2017/05/events-3.jpg?fit=2160%2C1200&ssl=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        marginBottom: '35px',
        padding: '0 0 20px', // Add padding to the bottom
      }}
    >
      <Link to="/events">
        <button className="btn btn-danger">View Events 
        <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
        
        </button>
      </Link>
    </div>
    <div className="container">
    <div>
    </div>  
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-lg-4 col-md-6 mb-4">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}

export default Event;
