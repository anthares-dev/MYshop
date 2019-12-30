/*----- REACT/DEPENDECIES -----*/
import React from "react";

/*----- VIEWS/COMPONENTS -----*/
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

/*----- STYLE/MATERIAL UI -----*/
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Landing() {
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
          <Box mb={2}>
            <ProductCard />
          </Box>
          <Box mb={2}>
            <ProductCard />
          </Box>
          <Box mb={2}>
            <ProductCard />
          </Box>
        </Typography>
      </Container>

      <NavBar />
    </React.Fragment>
  );
}
