import React, { Component } from "react";
import { withStyles, Typography, CircularProgress } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MessageAlert from "./MessageAlert";
import ConfirmModal from "./ConfirmModal";
import Nav from "./Nav";
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

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      userId: null,
      title: "",
      description: "",
      content: "",
      save: false,
      showAlert: false,
      response: false,
      created: false,
      successMessage: "",
    };
  }
  validate = () => {
    const { title, description, content } = this.state;
    if (!title || !description || !content) {
      this.setState({ showAlert: true });
      return false;
    }
    return true;
  };
  createPost = async () => {
    const url = `${URL_BASE}/api/post/create`;

    const { userId, title, description, content } = this.state;
    const post = {
      title,
      description,
      content,
      userId,
    };
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();

    if (data.success)
      this.setState({ created: true, successMessage: data.message });
  };
  savePost = async () => {
    if (this.validate()) {
      this.setState({ save: true });
    }
  };
  willCreate = (status) => {
    this.setState({ response: status });
  };
  componentDidUpdate = async (prevState, prevProps) => {
    if (prevProps !== this.props && this.state.response) {
      this.setState({ response: false, save: false });
      await this.createPost();
      setTimeout(() => this.props.history.push("/"), 1000);
    }
  };

  componentDidMount = () => {
    const author = localStorage.getItem("name");
    const userId = localStorage.getItem("user_id");
    this.setState({ author, userId });
  };

  render() {
    const { classes } = this.props;
    const { author, save, showAlert, created, successMessage } = this.state;
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
                  placeholder="This is an awesome post"
                  onChange={(e) => this.setState({ title: e.target.value })}
                  autoComplete={false}
                  required={true}
                />
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
              <Typography paragraph="true">Description *</Typography>
              <TextareaAutosize
                cols={85}
                rows={5}
                maxRows={10}
                className={classes.description}
                id="description"
                onChange={(e) => this.setState({ description: e.target.value })}
                required={true}
              />
              <br />
              <Typography paragraph="true" gutterBottom="true">
                Post content *
              </Typography>
              <CKEditor
                editor={ClassicEditor}
                onInit={(editor) => {}}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ content: data });
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
              onClick={this.savePost}
            >
              Save
            </Button>
          </Paper>
          {showAlert && (
            <MessageAlert
              type="error"
              open={true}
              message="All this fields (*) are required"
            />
          )}

          {save && (
            <ConfirmModal
              open={true}
              title="Are you sure you want to save this changes?"
              text=""
              confirm={this.willCreate}
            />
          )}

          {created && (
            <MessageAlert type="success" open={true} message={successMessage} />
          )}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePost);
