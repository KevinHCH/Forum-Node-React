import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";


import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AddComment from "./AddComment";
import ModalConfirm from './ModalConfirm'
const styles = theme => ({
  root: {
    padding: "25px",
    margin: "25px",
    "& .MuiTextField-root": {
      margin: "10px 0",
      width: "50%"
    }
  },
  title: {
    padding: "5px"
  },
  icon: {
    margin: "3px 7px",
    transform: "scale(1.5)"
  },
  editIcon: {
    color: "#3f51b5"
  },
  deleteIcon: {
    color: "#db3056"
  },
  
});

class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes, title, content, date, author } = this.props;
    return (
      <div>
        <Container width="75%">
          <Paper elevation={5}>
            <Box className={classes.root}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
              <TextField
                id="standard-required"
                label="Title"
                defaultValue={title}
              />
              <DeleteIcon />
              </Box>
              <br />
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onInit={editor => {
                  // You can store the "editor" and use when it is needed.
                  // console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ data });
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
          </Paper>
          <ModalConfirm title="Dialog title" content="This is all the dialog content"/>
          {/* <AddComment /> */}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(EditPost);
