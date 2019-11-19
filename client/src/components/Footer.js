import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="navbar"
    >
      <Link to="/">
        <BottomNavigationAction
          className="buttons"
          label="Home"
          icon={<RestoreIcon />}
        />
      </Link>
      <Link to="/cities">
        <BottomNavigationAction
          className="buttons"
          label="Cities"
          icon={<FavoriteIcon />}
        />
      </Link>
      <Link to="/createAccount">
        <BottomNavigationAction
          className="buttons"
          label="Create Account"
          icon={<LocationOnIcon />}
        />
      </Link>
      <Link to="/logIn">
        <BottomNavigationAction
          className="buttons"
          label="Login"
          icon={<FolderIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
