import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

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
  comments: {
    margin: "25px auto"
  },
  commentField: {
    margin: "7px 0",
    fontSize: "1.1em",
    border: 0,
    boxShadow: "inset -1px -1px 5px 4px #c9d1d3",
    padding: "5px 10px"
  }
});

class AddComment extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box
          width="50%"
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
          <TextareaAutosize
            cols={65}
            rows={10}
            maxRows={15}
            className={classes.commentField}
          />
          <Button variant="contained" color="primary">
            Add comment
          </Button>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(AddComment);
