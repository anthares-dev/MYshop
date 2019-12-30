/*----- REACT/DEPENDECIES -----*/
import React, { useState, useEffect } from "react";

/*----- STYLE/MATERIAL UI -----*/
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "auto",
    backgroundColor: "#FFFAFA"
  },
  media: {
    height: 340
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.1)
    }
  }
}));

export default function ProductCard() {
  const classes = useStyles();
  const axios = require("axios");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get("http://localhost:5000/products/")
      .then(res => {
        setLoading(false);
        console.log("fetched data:", res.data);
        if (res.data) {
          setProducts(res.data);
        } else {
          setProducts([]);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <Skeleton variant="rect" height={340} animation="wave" />
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
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>

                <Box className={classes.actions} mt={2}>
                  <Rating value={product.rate} readOnly />

                  <Typography variant="body2" component="p">
                    {product.category}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
              <Checkbox
                aria-label="favorite"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
              <Typography variant="h6" component="p">
                {product.price} €
              </Typography>
              <IconButton aria-label="addtocart">
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      ))}
    </React.Fragment>
  );
}
