import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../lib/supabase';

function Header() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
<header className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <Link to="/" className="navbar-brand">
      Event App
    </Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="Contact" className="nav-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link">Categories</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact us</Link>
        </li>
      </ul>
      
      <form className="form-inline my-2 my-lg-0 mr-auto">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      </form>

      {user ? (
        <div className="navbar-nav">
          <span className="nav-item nav-link">Welcome, {user.email}</span>
          <button className="btn btn-link nav-item nav-link" onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className="navbar-nav">
          <Link to="/Auth" className="btn btn-link nav-item nav-link">Login</Link>
        </div>
      )}
    </div>
  </div>
</header>

  );
}

export default Header;
