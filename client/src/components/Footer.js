import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../redux/actions/userActions"

//Material-ui
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Footer({ user, logout }) {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (user) {
    }

  });

  const isLogout = () => {
    console.log("footer logout");
    logout();
  }


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
        icon={<HomeIcon />}
        component={Link}
        to="/" />

      <BottomNavigationAction
        className="buttonsNav"
        icon={<SearchIcon />}
        component={Link}
        to="/cities" />
      <div className="divButtonsFooter">
        {
          (user._id) ?
            (<BottomNavigationAction
              className="buttonsNav"
              onClick={isLogout}
              icon={<ExitToAppIcon />}
              component={Link}
              to="/">
            </BottomNavigationAction>) :
            (<BottomNavigationAction
              className="buttonsNav"
              icon={<AccountBoxIcon />}
              component={Link}
              to="/logIn" />)
        }

      </div>






    </BottomNavigation>
  );
}

Footer.propTypes = {
  logout: PropTypes.func.isRequired,

};


const mapStateToProps = state => ({
  user: state.user.payload
});

export default connect(mapStateToProps, { logout })(Footer);

