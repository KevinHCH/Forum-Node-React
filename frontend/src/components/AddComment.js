import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MessageAlert from "./MessageAlert";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

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
  comments: {
    margin: "25px auto",
  },
  commentField: {
    margin: "7px 0",
    fontSize: "1.1em",
    border: 0,
    boxShadow: "inset -1px -1px 5px 4px #c9d1d3",
    padding: "5px 10px",
    resize: "none",
  },
  button: {
    width: "25%",
    margin: "5px auto",
    fontSize: "16px",
  },
});
const URL_BASE = process.env.REACT_APP_URL_BASE;
class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: false,
      status: false,
      message: "",
      empty: true,
    };
  }
  sendComment = async (body) => {
    const url = `${URL_BASE}/api/comment/create`;
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await response.json();

    const { success, message } = data;
    return { success, message };
  };

  publishComment = async (e) => {
    const { user_id, id } = this.props;
    const commentValue = document.getElementById("comment").value.trim();
    if (!commentValue || commentValue.length == 0) {
      this.setState({ empty: false });
    } else {
      const { success, message } = await this.sendComment({
        idPost: id,
        idUser: user_id,
        comment: commentValue,
      });

      this.setState({ request: true, status: success, message });
    }
  };
  resetComment = async () => {
    const commentValue = document.querySelector(".AddComment-commentField-264");
    commentValue.value = "";
    await this.setState({ request: false, status: false, message: "" });
  };

  onClick = async () => {
    await this.publishComment();
    // Para comunicar a tu componente padre que has cambiado datos, basta con llamar a
    // una funcion que os comunique entre vosotros, al tener una funcion que actualiza mi
    // estado (hijo) basta con YO llame a esa funcion, dando la orden a mi padre para
    // que el la llame
    const { refreshComments } = this.props;
    await refreshComments();
    // await this.resetComment()
  };

  render() {
    const { classes } = this.props;
    const { status, message, request, empty } = this.state;
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
            Add comment here
          </Typography>
          {!empty && (
            <MessageAlert
              open={true}
              type="error"
              message="This field cannot be empty"
            />
          )}
          {request && (
            <MessageAlert open={status} type="success" message={message} />
          )}

          {/* {this.renderMessage(status, message)} */}
          <TextareaAutosize
            cols={65}
            rows={10}
            maxRows={15}
            className={classes.commentField}
            id="comment"
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.onClick}
          >
            Add comment
          </Button>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(AddComment);
