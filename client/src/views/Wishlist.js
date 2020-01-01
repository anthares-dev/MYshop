/*----- REACT/DEPENDECIES -----*/
import React, { useEffect } from "react";
import { fetchWishlist } from "../store/actions/wishActions";
import { useSelector, useDispatch } from "react-redux";

/*----- VIEWS/COMPONENTS -----*/
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";

/*----- STYLE/MATERIAL UI -----*/
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Wishlist(params) {
  const dispatch = useDispatch();
  const user_id = params.match.params.user_id;

  useEffect(() => {
    dispatch(fetchWishlist(user_id));
  }, []);

  const loading = useSelector(state => state.wishlist.pending);
  const products = useSelector(state => state.wishlist.wishlist);
  const error = useSelector(state => state.wishlist.error);

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
            My Wishlist:
          </Typography>
          <Box my={1}>
            <ProductCard loading={loading} products={products} error={error} />
          </Box>
        </Typography>
      </Container>

      <NavBar />
    </React.Fragment>
  );
}
