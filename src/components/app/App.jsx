import React from 'react';
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/WelcomeScreen';

const App = ({errorsCount}) => {
  return (
    <WelcomeScreen errorsCount={errorsCount} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
