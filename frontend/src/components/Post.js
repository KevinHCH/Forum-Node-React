import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    padding: "5px",
    margin: "25px"
  },
  title: {
    padding: "5px"
  },
  hr: {
    outline: "1px solid",
    width: "75%",
    margin: "10px auto",
    color: "#e5dfdf"
  },
  description: {
    marginTop: "25px",
    padding: "5px"
  }
});
class Post extends Component {
  render() {
    const { classes, title, desc, date, author } = this.props;
    return (
      <div>
        <Container maxWidth="sm">
          <Paper elevation={5}>
            <Box className={classes.root}>
              <Typography
                variant="h3"
                component="h3"
                align="left"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography className={classes.title}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} p={2}>
                    {date}
                  </Grid>
                  <Grid item xs={12} sm={6} align="right" spacing={2}>
                    {author}
                  </Grid>
                </Grid>
              </Typography>
              <p className={classes.hr}></p>
              <Typography>
                <p className={classes.description}>{desc}</p>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
