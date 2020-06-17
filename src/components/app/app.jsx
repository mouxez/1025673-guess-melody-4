import React from 'react';
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/welcome-screen';

const welcomeButtonHandler = () => {};

const App = ({errorsCount}) => {
  return (
    <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={welcomeButtonHandler} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
