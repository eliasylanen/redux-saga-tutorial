import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Headers';

/**
 * The parent component renders the Head component and
 * components in the route the user navigates to
 */
const App = props => (
  <div className="container-fluid text-center">
    <Header />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
