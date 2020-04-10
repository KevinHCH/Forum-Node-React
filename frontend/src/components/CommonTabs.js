import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import PostDetail from './PostDetail';
import SignInSide from './SignInSide'
import SignUp from './Register'
import CreatePost from './CreatePost';
import EditPost from "./EditPost";
import PostsByUser from "./PostsByUser";
import SearchBar from "./SearchBar";
class Nav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={SignInSide} />
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={PostDetail} />
            <Route path="/editPost/:id" component={EditPost} />
            <Route path="/create" component={CreatePost} />
            <Route path="/posts/user/:id" component={PostsByUser}/>
            <Link to="/search" component={SearchBar} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Nav;
