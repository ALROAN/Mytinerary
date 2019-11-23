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
        className="buttons"
        icon={<RestoreIcon />}
        component={Link}
        to="/" />


      <BottomNavigationAction
        className="buttons"
        icon={<FavoriteIcon />}
        component={Link}
        to="/cities" />


      <BottomNavigationAction
        className="buttons"
        icon={<LocationOnIcon />}
        component={Link}
        to="/createAccount">
      </BottomNavigationAction>



      <BottomNavigationAction
        className="buttons"
        icon={<FolderIcon />}
        component={Link}
        to="/logIn">
      </BottomNavigationAction>


    </BottomNavigation>
  );
}

