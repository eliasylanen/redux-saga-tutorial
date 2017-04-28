import React from 'react';
import { Link } from 'react-router';

/**
 * Home page component. Serves as welcome page
 */
const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">
      Welcome to Media Library built with React, Redux, Redux-saga!
    </h1>
    <div>
      <Link to="library">
        <button className="btn btn-lg btl-primary">
          Visit library
        </button>
      </Link>
    </div>
  </div>
);

export default HomePage;
