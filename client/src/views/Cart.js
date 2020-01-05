/*----- REACT/DEPENDECIES -----*/
import React, { useEffect } from "react";
import { fetchCart } from "../store/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

/*----- VIEWS/COMPONENTS -----*/
import NavBar from "../components/NavBar";
import ProductCardSmall from "../components/ProductCardSmall";
import FilterPanel from "../components/FilterPanel";

/*----- STYLE/MATERIAL UI -----*/
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Cart(params) {
  const dispatch = useDispatch();
  const user_id = params.match.params.user_id;

  useEffect(() => {
    dispatch(fetchCart(user_id));
  }, []);

  const loading = useSelector(state => state.cart.pending);
  const products = useSelector(state => state.cart.cart);
  //const products = useSelector(state => state.user.user.productlist);
  const error = useSelector(state => state.cart.error);

  console.log(products);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            height: "80vh",
            overflow: "auto"
          }}
        >
          <Typography variant="h4" component="h2">
            Shopping cart
          </Typography>
          <Box my={1}>
            <ProductCardSmall
              loading={loading}
              products={products}
              error={error}
            />
          </Box>
        </Typography>
      </Container>

      <NavBar />
    </React.Fragment>
  );
}
