import React from "react";
import SignInSide from "./components/SignInSide";
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import Post from "./components/Post";

import Nav from './components/CommonTabs';
function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
