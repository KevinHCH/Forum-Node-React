import React, { Component } from 'react'
import Nav from './Nav'
import Post from './Post'
import EditPost from './EditPost'
import Comment from './Comment'
class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = { offset: 0 };
  }
  handleClick(offset) {
    this.setState({ offset });
  }

  render() {
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolor. Hic, excepturi officiis. Quisquam deleniti id iusto iure veritatis aliquam alias, rem, magni minus unde et amet enim error nobis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quod deleniti alias expedita natus veritatis adipisci accusamus, nesciunt quam in et maxime ipsum! Laborum pariatur quia tenetur ullam, praesentium deleniti!"
    
    return (
      <div>
        <Nav></Nav>
        {/* <Post title="Title" date={new Date().toLocaleString()} author="Author" desc={desc}/>
        <Post title="Title" date={new Date().toLocaleString()} author="Author" desc={desc}/>
        <Post title="Title" date={new Date().toLocaleString()} author="Author" desc={desc}/>
        <Post title="Title" date={new Date().toLocaleString()} author="Author" desc={desc}/>
        <Post title="Title" date={new Date().toLocaleString()} author="Author" desc={desc}/>
        <Post title="Title" date={new Date().toLocaleString()} author="Author" desc={desc}/> */}

        <EditPost title="Title of the post" date={new Date().toLocaleString()} author="Author" content={desc}/>
        {/* <Comment user="Author" comment={desc} date={new Date().toLocaleString()}></Comment> */}
      </div>
    )
  }
  
}

export default Home