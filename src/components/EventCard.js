// event/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventCard({ event }) {
  const getRandomColor = () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="card shadow rounded">
      <div className="card-body d-flex flex-column">
        <div className="event-thumbnail bg-dark text-white d-flex justify-content-center align-items-center mb-3" style={{ height: '150px', backgroundImage: `url(${event.image})`, backgroundSize: 'cover' }}></div>
        <h5 className={`card-title text-${getRandomColor()}`}>{event.name}</h5>
        <p>City: {event.city}</p>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="card-text text-white bg-info rounded-pill px-1 py-1" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>{event.category}</strong>
          </div>
          <div className="card-text">
            <strong>{event.price === 0 ? <span className="text-success">FREE</span> : `$${event.price}`}</strong>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div className="mt-auto"><Link to={`/events/${event.id}`} className="btn btn-danger btn-sm">More Details</Link>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
  
  
  
};


export default EventCard;
