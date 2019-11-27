import React from "react";
import { Link } from "react-router-dom";

//Material-ui
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
      className="navbar">

      <BottomNavigationAction
        className="buttonsNav"
        icon={<RestoreIcon />}
        component={Link}
        to="/" />


      <BottomNavigationAction
        className="buttonsNav"
        icon={<FavoriteIcon />}
        component={Link}
        to="/cities" />


      <BottomNavigationAction
        className="buttonsNav"
        icon={<LocationOnIcon />}
        component={Link}
        to="/createAccount">
      </BottomNavigationAction>



      <BottomNavigationAction
        className="buttonsNav"
        icon={<FolderIcon />}
        component={Link}
        to="/logIn">
      </BottomNavigationAction>


    </BottomNavigation>
  );
}

