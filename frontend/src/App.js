import React from 'react';
import SignInSide from './components/SignInSide'
import Register from './components/Register'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <SignInSide></SignInSide>
      </div>
    </Router>
  );
}

export default App;
