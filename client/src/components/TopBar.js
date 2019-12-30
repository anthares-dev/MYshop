import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// https://medium.com/@tsubasakondo_36683/4-ways-to-center-a-component-in-material-ui-a4bcafe6688e

const useStyles = makeStyles(theme => ({
  root: {
    height: "12vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {}
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        MYshop
      </Typography>
    </div>
  );
}
