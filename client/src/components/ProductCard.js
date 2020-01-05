/*----- REACT/DEPENDECIES -----*/
import React, { useState, useEffect } from "react";
import {
  addProductCart,
  delProductCart
} from "../store/actions/productActions";
import { connect, useSelector, useDispatch } from "react-redux";

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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "auto"
  },
  media: {
    height: 300
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

export default function ProductCard({ loading, products, error }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user[0]);
  if (loading)
    return (
      <div>
        <Skeleton variant="rect" height={300} animation="wave" />
        <Typography gutterBottom variant="h5" component="h2">
          Loading...
        </Typography>
      </div>
    );

  if (error) return <div>{error}</div>;

  console.log(user);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const onClickHandler = () => event => {
    console.log("inside onchangehandler");
    let product_id = event.currentTarget.value;
    console.log(product_id);

    dispatch(addProductCart(product_id));
  };

  //checked={productlist.includes(product._id) ? true : false}

  return (
    <React.Fragment>
      {products.map((product, i) => (
        <Box mb={2} key={i}>
          <Card className={classes.card}>
            <CardActionArea>
              <Slider {...settings}>
                {product.images.map((image, i) => (
                  <div key={i}>
                    <img className={classes.media} src={image} alt={image} />
                  </div>
                ))}
              </Slider>
              {/*<CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />*/}

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
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
              <IconButton
                aria-label="addtocart"
                onClick={onClickHandler(product._id)}
                value={product._id}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      ))}
    </React.Fragment>
  );
}
