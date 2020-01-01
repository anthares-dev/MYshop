/*----- REACT/DEPENDECIES -----*/
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

/*----- VIEWS/COMPONENTS -----*/

/*----- STYLE/MATERIAL UI -----*/
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

/*----- RESOURCES -----*/
// https://material-ui.com/components/bottom-navigation/

const useStyles = makeStyles({
  root: {
    width: "auto",
    height: "8vh"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("");

  const user = useSelector(state => state.user.user[0]);

  const handleChange = (event, newValue) => {
    //history.push(`/${newValue}/${user._id}`);
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value=""
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />

      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Wishlist"
        value="wish"
        icon={<FavoriteIcon />}
        component={Link}
        to={user ? `/wishlist/${user._id}` : "/wishlist"}
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<ShoppingCartIcon />}
        component={Link}
        to={user ? `/cart/${user._id}` : "/cart"}
      />
      <BottomNavigationAction
        label="Account"
        value="account"
        icon={<AccountBoxIcon />}
      />
    </BottomNavigation>
  );
}
