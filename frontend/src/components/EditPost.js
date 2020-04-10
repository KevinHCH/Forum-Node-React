import React, { Component } from "react";
import { withStyles, Typography, CircularProgress } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MessageAlert from "./MessageAlert";
import ConfirmModal from "./ConfirmModal";
import Nav from "./Nav";
import { getJSONData } from "../utils/Utils";

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
  icon: {
    margin: "3px 7px",
    transform: "scale(1.5)",
  },
  editIcon: {
    color: "#3f51b5",
  },
  deleteIcon: {
    color: "#db3056",
    cursor: "pointer",
    width: "1.5em",
    height: "1.5em",
  },
  button: {
    margin: "0 0 20px 50px",
  },
  description: {
    marginBottom: "10px",
    width: "60%",
  },
});
const URL_BASE = process.env.REACT_APP_URL_BASE;
class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: null,
      post: {},
      title: "",
      description: "",
      comment: "",
      save: false,
      userId: null,
      isAdmin: false,
      delete: false,
      willDelete: false,
      willUpdate: false,
      response: false,
      isUpdated: false,
      responseMessage: "",
      isDeleted: false,
    };
  }

  getPostById = async () => {
    const { id } = this.props.match.params;
    this.setState({ postId: id });
    const url = `${URL_BASE}/api/post/getPostById/${id}`;
    const data = await getJSONData(url);
    const { title, description, content } = data[0];
    this.setState({ title, description, comment: content });
    // await this.setState({ post: data[0] });
    await this.setState({ post: data[0] });
  };
  checkPrivileges = () => {
    const isAdmin = localStorage.getItem("admin");
    const user_id = parseInt(localStorage.getItem("user_id"));
    this.setState({ isAdmin, userId: user_id });
  };
  setNewValue = (newValues) => {
    this.setState({ newValues });
  };
  hideComment = async () => {
    const { postId } = this.state;
    const url = `${URL_BASE}/api/post/delete`;
    const token = localStorage.getItem("token");
    const headers = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, {
      ...headers,
      body: JSON.stringify({ id: postId }),
    });
    const data = await response.json();
    if (data.success) this.setState({ isDeleted: true });
  };
  updateComment = async () => {
    const url = `${URL_BASE}/api/post/edit`;

    const { title, description, comment } = this.state;
    const { id, user_id } = this.state.post;
    const newPost = {
      id,
      title,
      description,
      content: comment,
      userId: user_id,
    };
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
      body: JSON.stringify(newPost),
    });
    const data = await response.json();
    if (data.success) this.setState({ isUpdated: true });

    this.setState({ response: true, responseMessage: data.message });
  };
  showAlert = () => {
    const { responseMessage, isUpdated } = this.state;
    let componentTemplate = null;
    if (isUpdated) {
      componentTemplate = (
        <MessageAlert type="success" open={true} message={responseMessage} />
      );
    } else {
      componentTemplate = (
        <MessageAlert type="error" open={true} message={responseMessage} />
      );
    }

    // this.setState({ isUpdated: false });
    return componentTemplate;
  };
  willDelete = (status) => {
    this.setState({ willDelete: status, delete: false });
  };
  willUpdate = (status) => {
    this.setState({ willUpdate: status, save: false });
  };

  componentDidUpdate = async (prevState, prevProps) => {
    const { willDelete, willUpdate } = this.state;
    const deletePost = prevProps.willDelete !== willDelete;
    const savePost = prevProps.willUpdate !== willUpdate;
    if (deletePost || savePost) {
      if (willUpdate) {
        await this.updateComment();
        await this.getPostById();
        setTimeout(() => {
          this.setState({ isUpdated: false, response: false });
          this.props.history.push("/");
        }, 1500);
      }

      if (willDelete) {
        await this.hideComment();
        setTimeout(() => {
          this.props.history.push("/");
        }, 1500);
      }
    }
  };
  componentDidMount = async () => {
    await this.getPostById();
    this.checkPrivileges();
  };

  render() {
    const { classes } = this.props;
    // const { title, content, description, author, user_id } = this.state.post;
    const { author, user_id } = this.state.post;
    const { title, description, comment } = this.state;
    const { save, userId, isAdmin } = this.state;
    const showDeleteIcon = user_id === userId || !isAdmin ? true : false;
    if (!showDeleteIcon) {
      this.props.history.push("/");
      
    }
    return (
      <div>
        <Nav></Nav>
        <Container width="75%">
          <Paper elevation={5}>
            <Box className={classes.root}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <TextField
                  id="filled-required"
                  label="Title"
                  defaultValue="Title"
                  value={title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
                {showDeleteIcon && (
                  <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={() => this.setState({ delete: true })}
                  />
                )}
              </Box>

              <TextField
                id="filled-read-only-input"
                label="Author"
                defaultValue="Author"
                value={author}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <Typography paragraph="true">Description</Typography>
              <TextareaAutosize
                cols={85}
                rows={5}
                maxRows={10}
                className={classes.description}
                value={description}
                id="description"
                onChange={(e) => this.setState({ description: e.target.value })}
              />
              <br />
              <Typography paragraph="true" gutterBottom="true">
                Post content
              </Typography>
              <CKEditor
                editor={ClassicEditor}
                data={comment}
                onInit={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  // console.log("Editor is ready to use!", editor);
                  // console.log("here");
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ comment: data });
                  // console.log({data});
                  // console.log( { event, editor, data } );
                }}
                onBlur={(event, editor) => {
                  // console.log( 'Blur.', editor );
                }}
                onFocus={(event, editor) => {
                  // console.log( 'Focus.', editor );
                }}
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.setState({ save: true })}
            >
              Save
            </Button>
          </Paper>

          {this.state.delete && (
            <ConfirmModal
              open={true}
              title="Are you sure you want to delete this post?"
              text=""
              confirm={this.willDelete}
            />
          )}

          {this.state.save && (
            <ConfirmModal
              open={true}
              title="Are you sure you want to save this changes?"
              text=""
              confirm={this.willUpdate}
            />
          )}

          {this.state.response ? this.showAlert() : null}
          {this.state.isDeleted && (
            <MessageAlert
              type="success"
              open={true}
              message={"The post was deleted successfully"}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(EditPost);
