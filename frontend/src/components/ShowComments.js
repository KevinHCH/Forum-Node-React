import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DeleteIcon from "@material-ui/icons/Delete";

import { getJSONData } from "../utils/Utils";
import ConfirmModal from "./ConfirmModal";

const URL_BASE = process.env.REACT_APP_URL_BASE;
const styles = (theme) => ({
  root: {
    padding: "25px",
    margin: "25px",
    "& .MuiTextField-root": {
      margin: "10px 0",
      width: "50%",
    },
  },
  title: {
    padding: "5px",
  },
  upperCase: {
    textTransform: "uppercase",
  },
  comments: {
    margin: "25px auto",
  },
  commentContainer: {
    padding: ".5em 1em",
    outline: "1px solid #413c69",
    backgroundColor: "#f1f9f9",
    fontFamily: "Arial",
    margin: "25px auto",
  },
  userName: {
    padding: "2px 15px",
    backgroundColor: "#381460",
    color: "#f6eedf",
    marginRight: "auto",
  },
  commentText: {
    textAlign: "left",
    padding: ".7em 0",
  },
  delete: {
    width: "1.2em",
    height: "1.2em",
    paddingLeft: ".2em",
    cursor: "pointer",
  },
});

class ShowComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isAdmin: false,
      userId: null,
      wantToDelete: false,
      deleteComment: false,
      currentComment: {},
    };
  }

  checkPrivileges = () => {
    const isAdmin = localStorage.getItem("admin") == true ? true : false;
    const user_id = parseInt(localStorage.getItem("user_id"));
    this.setState({ isAdmin, userId: user_id });
  };
  updateComment = async (url, body) => {
    // const url = `${URL_BASE}/api/comment/delete`
    const token = localStorage.getItem("token");
    const headers = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, {
      ...headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  };
  hideComment = async ({ id, id_post, id_user }) => {
    const url = `${URL_BASE}/api/comment/delete`;
    const comment = { id, idPost: id_post, idUser: id_user };
    await this.updateComment(url, comment);
    this.setState({ deleteComment: false });
  };
  isAccepted = (childData) => {
    this.setState({ deleteComment: childData });
  };
  confirm = (comment) => {
    this.setState({ currentComment: comment, wantToDelete: true });
  };

  renderComments = (comments) => {
    const { classes } = this.props;
    const { isAdmin, userId } = this.state;
    const commentOwnerId = comments[0]?.id_user || null;
    const showDelete = isAdmin || userId === commentOwnerId ? true : false;

    if (comments.length === 0) return null;
    return comments.map((comment) => (
      <Container
        maxWidth="sm"
        className={classes.commentContainer}
        key={comment.id}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={classes.upperCase}
        >
          <Typography className={classes.userName}>
            {comment.user_name}
          </Typography>
          <Typography>{comment.pub_date}</Typography>
          {showDelete && (
            <DeleteIcon
              color="error"
              className={classes.delete}
              onClick={() => this.confirm(comment)}
            />
          )}
        </Box>
        <Box>
          <Typography className={classes.commentText}>
            {comment.comment}
          </Typography>
        </Box>
      </Container>
    ));
  };

  componentDidUpdate = async (prevState, prevProps) => {
    const { deleteComment } = this.state;
    if (deleteComment !== prevProps.deleteComment && deleteComment) {
      await this.hideComment(this.state.currentComment);
      const { refreshComments } = this.props;
      await refreshComments();
      this.setState({ wantToDelete: false });
    }
  };

  componentDidMount = () => {
    this.checkPrivileges();
  };

  render() {
    const { classes } = this.props;
    const { user_name, comment, pub_date } = this.props;
    return (
      <div>
        <Box
          width="75%"
          className={classes.comments}
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h5"
            component="h5"
            align="left"
            className={classes.title}
          >
            Comments
          </Typography>

          {this.renderComments(this.props.comments)}
          {this.state.wantToDelete && (
            <ConfirmModal
              open={this.state.wantToDelete}
              title="Are you sure you want to delete this comment?"
              text=""
              confirm={this.isAccepted}
            />
          )}
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(ShowComments);
