import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import AddComment from "./AddComment";
import ShowComments from "./ShowComments";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { getJSONData } from "../utils/Utils";

const URL_BASE = process.env.REACT_APP_URL_BASE;
const styles = (theme) => ({
  a: {
    textDecoration: "none",
  },
  root: {
    padding: "5px",
    margin: "25px",
  },
  title: {
    padding: "5px",
    textTransform: "uppercase",
  },
  hr: {
    outline: "1px solid",
    width: "75%",
    margin: "10px auto",
    color: "#e5dfdf",
  },
  description: {
    marginTop: "10px",
    padding: "5px",
  },
  content: {
    marginTop: "25px",
    padding: "5px",
  },
  edit: {
    cursor: "pointer",
    width: "1.5em",
    height: "1.5em",
  },
});

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      comments: [],
      isAdmin: false,
      userId: null,
    };
  }

  getComments = async () => {
    const { id } = this.state.post;
    const url = `${URL_BASE}/api/comment/getComments/${id}`;
    const comments = await getJSONData(url);
    if (comments) this.setState({ comments });
  };
  getPostById = async () => {
    const { id } = this.props.match.params;
    this.setState({ postId: id });
    const url = `${URL_BASE}/api/post/getPostById/${id}`;
    const data = await getJSONData(url);
    await this.setState({ post: data[0] });
  };
  checkPrivileges = () => {
    const isAdmin = localStorage.getItem("admin");
    const user_id = parseInt(localStorage.getItem("user_id"));
    this.setState({ isAdmin, userId: user_id });
  };
  componentDidMount = async () => {
    const token = localStorage.getItem("token")
    if(!token){
      this.props.history.push("/login")
      return
    }
    await this.getPostById();
    await this.getComments();
    this.checkPrivileges();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.getPostById();
    }
  };

  render() {
    const { classes } = this.props;
    const { post, isAdmin, userId } = this.state;
    const { title, content, date, author, id, user_id, description } = post;
    const owner = userId === user_id
    const admin = (!isAdmin) ? true : false
    const canEdit = (admin || owner) ? true : false
    
    return (
      <div>
        <Nav></Nav>
        <Container maxWidth="lg">
          <Paper elevation={5}>
            <Box className={classes.root}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h4"
                  component="h4"
                  align="left"
                  className={classes.title}
                >
                  {title}
                </Typography>
                {canEdit && (
                  <Typography>
                    <Link to={`/editPost/${id}`}>
                      <EditIcon className={classes.edit} />
                    </Link>
                  </Typography>
                )}
              </Box>
              <Typography className={classes.title}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} p={2}>
                    {date}
                  </Grid>
                  <Grid item xs={12} sm={6} align="right" spacing={2}>
                    {author}
                  </Grid>
                </Grid>
              </Typography>
              <Typography component="p" m={3} className={classes.description}>
                {description}
              </Typography>
              <p className={classes.hr}></p>
              <Typography className={classes.description}>
                {ReactHtmlParser(content)}
              </Typography>
            </Box>
          </Paper>
          <AddComment {...post} refreshComments={this.getComments} />
          {this.state.comments.length > 0 && (
            <ShowComments
              comments={this.state.comments}
              refreshComments={this.getComments}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(PostDetail);
