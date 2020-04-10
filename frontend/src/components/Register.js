import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MessageAlert from "./MessageAlert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        DEVS FORUM
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
const URL_BASE = process.env.REACT_APP_URL_BASE;
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      userName: null,
      password: null,
      message: null,
      status: false,
      showError: false,
      errorPass: false,
    };
  }
  setValue = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  validatePassword = () => {
    const { password } = this.state;
    const repeatPassword = document.getElementById("repeat-password").value;

    if (repeatPassword == password) return true;
    return false;
  };
  register = async () => {
    const url = `${URL_BASE}/register`;
    const { firstName, lastName, email, password, userName } = this.state;
    const user = { name:firstName, surname: lastName, email, password, userName };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (data.success) {
      this.setState({ status: true, message: data.message });
      setTimeout(() => this.props.history.push('/login'), 1000)
    } else {
      this.setState({ showError: true, message: data.message });
    }
  };

  handleForm = (e) => {
    e.preventDefault();
    if (this.validatePassword()) {
      this.register();
    } else {
      this.setState({ errorPass: true });
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.setState({ errorPass: false });
    }
  };

  render() {
    const { classes } = this.props;
    const { status, message, showError, errorPass } = this.state;
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            onSubmit={this.handleForm}
            method="post"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.setValue}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={this.setValue}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.setValue}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="User name"
                  name="userName"
                  autoComplete="email"
                  onChange={this.setValue}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.setValue}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="repeat-password"
                  label="Repeat password"
                  type="password"
                  id="repeat-password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center">
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Box>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
        {errorPass && (
          <MessageAlert
            type="error"
            open={true}
            message="The password must be the same"
          />
        )}
        {status ? (
          <MessageAlert type="success" open={true} message={message} />
        ) : (
          <MessageAlert type="error" open={showError} message={message} />
        )}
      </Container>
    );
  }
}

export default withStyles(useStyles)(SignUp);
