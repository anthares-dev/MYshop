/*----- REACT/DEPENDECIES -----*/
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

/*----- VIEWS/COMPONENTS -----*/
import TopBar from "./components/TopBar";
import Landing from "./views/Landing";
import Product from "./views/Product";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import CMS from "./views/CMS";
//import NavBar from "./components/NavBar"

/*----- STYLE/MATERIAL UI -----*/
//import "./App.css";

/*----- RESOURCES -----*/
//https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/:product_id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/cart/checkout/:product_id" component={Checkout} />
          <Route path="/CMS" component={CMS} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
