import React, { Component } from "react";
import Nav from "./Nav";
import Post from "./Post";
import { Typography, Box } from "@material-ui/core";
const URL_BASE = process.env.REACT_APP_URL_BASE;

class PostsByUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: ''
    };
  }
  getPostsByUserId = async () => {
    const {id} = this.props.match.params
    const url = `${URL_BASE}/api/post/getPostsByUser`;
    const token = localStorage.getItem("token")
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    
    if (data.success) {
      this.setState({ posts: data.data });
    }else {
      this.setState({errorMessage: data.message, posts:[]})
    }
  };
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
  componentDidUpdate = async (prevProps, prevState) => {
    if(prevProps !== this.props){
      await this.getPostsByQuery()
    }
  };
  componentDidMount = async () => {
    await this.getPostsByUserId();
  };

  render() {
    return (
      <div>
        <Nav />
        {(this.state.posts && this.state.posts.length > 0) ? (
          this.getPosts()
        ) : (
          <Box component="div" m={2} style={{textAlign: 'center'}}>
            <Typography variant="h4" component="h4">
            {"You don't have any post already"}
          </Typography>
          </Box>
        )}
      </div>
    );
  }
}

export default PostsByUser;
