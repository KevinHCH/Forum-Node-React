import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    padding: "5px",
    margin: "25px",
  },
});

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const { comment, user, date } = this.props;
    return (
      <div>
        <Container width="50%">
          <Paper elevation={2}>
            <Box className={classes.root}>
              <Box display="flex" justifyContent="space-between">
                <Typography align="left" width="50%">
                  {user}
                </Typography>
                <Typography align="right" width="50%">
                  {date}
                </Typography>
              </Box>
              <br />
              <Typography>{comment}</Typography>
            </Box>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Comment);
