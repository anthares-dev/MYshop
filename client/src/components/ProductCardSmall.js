/*----- REACT/DEPENDECIES -----*/
import React, { useState, useEffect } from "react";

/*----- STYLE/MATERIAL UI -----*/
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  cover: {
    width: 140,
    height: 140
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: 140
  },
  content: {
    flex: "1 0 auto"
  },

  controls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function ProductCardSmall({ loading, products, error }) {
  const classes = useStyles();
  const theme = useTheme();

  if (loading)
    return (
      <div>
        <Box mb={2}>
          <Skeleton variant="rect" height={140} animation="wave" />
        </Box>
        <Box mb={2}>
          <Skeleton variant="rect" height={140} animation="wave" />
        </Box>
        <Box mb={2}>
          <Skeleton variant="rect" height={140} animation="wave" />
        </Box>
        <Typography gutterBottom variant="h5" component="h2">
          Loading...
        </Typography>
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <React.Fragment>
      {products.map((product, i) => (
        <Box mb={2} key={i}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={product.image}
              title={product.name}
            />

            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h6">
                  {product.name}
                </Typography>
                {/*<Typography variant="subtitle1" color="textSecondary">
                  {product.description}
                </Typography> */}
              </CardContent>

              <div className={classes.controls}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Typography variant="h6" component="p">
                  {product.price} €
                </Typography>
              </div>
            </div>
          </Card>
        </Box>
      ))}
    </React.Fragment>
  );
}
