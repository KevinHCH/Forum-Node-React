import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
  success: {
    backgroundColor: "#50d890",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#50d890",
      outline: "1px solid #50d890"
    }
  },
  cancel: {
    backgroundColor: "#fa163f",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#fa163f",
      outline: "1px solid #fa163f"
    }
  }
});

class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClose = accept => {
    
    this.props.confirm(accept);
    this.setState({ open: false });
  };
  handleOpen = status => {
    if (status) this.setState({ open: true });
  };
  componentDidMount = () => {
    this.handleOpen(this.props.open);
  };

  componentDidUpdate(prevState, prevProps) {
    if (this.props.open !== prevProps.open) {
      this.handleOpen(true);
    }
  }

  render() {
    const { classes } = this.props;
    const { title, text } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.handleClose(false)}
              color="primary"
              className={classes.cancel}
            >
              Cancel
            </Button>
            <Button
              onClick={() => this.handleClose(true)}
              color="primary"
              className={classes.success}
            >
              Accept
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Confirm);
