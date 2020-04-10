import React, { Component } from "react";
import Alert from "@material-ui/lab/Alert";
import { withStyles, Snackbar } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
});

class MessageAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMessage: false,
      open: false,
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  onClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  alert = (status, message, open) => {
    return (
      <Snackbar open={open} autoHideDuration={2000} onClose={this.onClose}>
        <Alert variant="filled" severity={status}>
          {message}
        </Alert>
      </Snackbar>
    );
  };

  // EL PUTO ORDEN DE LOS PUTOS FACTORES SI ALTERA EL PUTO PRODUCTO!!
  // SIEMPRE, SIEMPRE SIEMPRE DEBE ESTAR PREVSTATE PRIMERO Y DESPUES
  // PREVPROPS, SIEMPREEEEEE!!
  componentDidUpdate = (prevState, prevProps) => {
    if (prevProps.open !== this.props.open) {
      this.handleOpen();
    }
  };
  componentDidMount = () => {
    const { open } = this.props;
    if (open) this.handleOpen();
  };

  render() {
    const { classes } = this.props;
    const { type, message } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>{this.alert(type, message, open)}</div>
    );
  }
}
export default withStyles(styles)(MessageAlert);
