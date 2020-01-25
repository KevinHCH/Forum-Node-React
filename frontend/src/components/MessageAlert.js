import React from "react";
import {useState} from 'react'
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const hide = (bool) => {
  setTimeout(() => {
    this.setAttribute('style', 'display:none')
  },1500)
}

export default function MessageAlert(props) {
  const { type, message } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert variant="filled" severity={type}>
        {message}
      </Alert>
    </div>
  );
}
