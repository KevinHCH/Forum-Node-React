import React, { Component } from "react";
import Nav from "./Nav";
import Post from "./Post";
import { getJSONData } from "../utils/Utils";

const URL_BASE = process.env.REACT_APP_URL_BASE;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      posts: [],
    };
  }
  handleClick(offset) {
    this.setState({ offset });
  }
  getPosts = () => {
    const { posts } = this.state;

    return posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        desc={post.description}
        date={post.date}
        author={post.author}
        id={post.id}
      />
    ));
  };

  // Este metodo siempre se ejecuta al montar el componente, no es necesario invocacion
  // ES MUY MUY MUY IMPORTANTE QUE LOS DATOS QUE SE VAN A PINTAR SE TRAIGAN EN ESTE METODO.
  // ESTE METODO SIEMPRE SIEMPRE SERA UNA PROMESA, ES MUY IMPORTANTE QUE SE RESUELVA (ASYNC/AWAIT)
  componentDidMount = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      this.props.history.push("/login");
      return;
    }
    const data = await getJSONData(`${URL_BASE}/api/post/getAllPosts`);
    this.setState({ posts: data });
  };

  render() {
    return (
      <div>
        <Nav></Nav>
        {this.getPosts()}
      </div>
    );
  }
}

export default Home;
