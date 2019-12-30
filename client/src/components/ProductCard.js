/*----- REACT/DEPENDECIES -----*/
import React from "react";

/*----- STYLE/MATERIAL UI -----*/
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "auto"
  },
  media: {
    height: 140
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.1)
    }
  }
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Product Name
          </Typography>
          {/*<Typography variant="body2" color="textSecondary" component="p">
            Product decription
          </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Checkbox
          aria-label="favorite"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />

        <Typography variant="h5" component="p">
          100 €
        </Typography>
        <IconButton aria-label="addtocart">
          <AddShoppingCartIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
