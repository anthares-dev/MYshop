/*----- REACT/DEPENDECIES -----*/
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUsers } from "./store/actions/userActions";
import { fetchProducts } from "./store/actions/productActions";

/*----- VIEWS/COMPONENTS -----*/
import TopBar from "./components/TopBar";
import Landing from "./views/Landing";
import Wishlist from "./views/Wishlist";
import Cart from "./views/Cart";
//import Product from "./views/Product";
//import Cart from "./views/Cart";
//import Checkout from "./views/Checkout";
//import CMS from "./views/CMS";
//import NavBar from "./components/NavBar"

/*----- STYLE/MATERIAL UI -----*/
import "./App.css";

/*----- RESOURCES -----*/
//https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route path="/wishlist/:user_id" component={Wishlist} />
          <Route path="/cart/:user_id" component={Cart} />
          {/*
          <Route path="/cart/checkout/:product_id" component={Checkout} />
          <Route path="/CMS" component={CMS} />*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
