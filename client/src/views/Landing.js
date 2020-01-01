/*----- REACT/DEPENDECIES -----*/
import React from "react";
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

export default function Landing() {
  const loading = useSelector(state => state.products.pending);
  const products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);

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
          {/*<FilterPanel />*/}
          <Box my={1}>
            <ProductCard loading={loading} products={products} error={error} />
          </Box>
        </Typography>
      </Container>

      <NavBar />
    </React.Fragment>
  );
}
