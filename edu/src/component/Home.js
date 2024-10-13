import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to the Mind Map Project</h1>
      <Link to="/upload">
        <button className="btn btn-primary mt-4">
          Go to File Upload
        </button>
      </Link>
    </div>
  );
};

export default Home;