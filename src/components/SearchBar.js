import React, { useState } from 'react';

const EventSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
<nav class="navbar sticky-top navbar-light bg-light">
      <form className="d-flex align-items-center me-2" onSubmit={handleSubmit}>
          <input
                  type="text"
                  placeholder="Search events..."
                  className="form-control form-control-sm me-2"
                  style={{ maxWidth: '200px', marginLeft: '2àpx' }}
                  value={searchTerm}
                  onChange={handleChange}
          />
          <button type="submit">Search</button>
          </form>
</nav>  );
};

export default EventSearch;
