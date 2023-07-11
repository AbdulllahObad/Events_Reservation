import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
    <div className="container">
      <h2 className="my-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Contact Information</h4>
          <p>
            Phone: +1(825) 488-4339<br />
            Email: abdullah.s.obad@gmail.com<br />
            Address: 123 Street, City, Country
          </p>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default ContactPage;
