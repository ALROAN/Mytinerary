import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


import LogIn from "./LogIn"
import { logout } from "../redux/actions/userActions"
import { withAuth } from "../redux/actions/userActions"


const Home = ({ user, logout, withAuth, history }) => {
  const [userInfo, setUserInfo] = useState(user)

  useEffect(() => {
    // setUserInfo(user)
    console.log("user.payload._id = " + user.payload._id);
    withAuth()
  }, [])


  return (
    <div className="HomeDiv">
      <div>
        <img
          className="myLogo"
          src={require("../assets/myLogo.png")}
          alt="Logo"
        />
        <p>
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>

      </div>

      <div>
        <h1>Start browsing</h1>
        <Link to="/cities" className="LinkHomeImage">
          <div className="divHomeImage">
            <p className="textHomeImage" >Choose your city</p>
          </div>
        </Link>
        <div className="divButtonsHomeLink">
          {
            (user.payload._id) ?
              (<button className="buttonsHomeLink" onClick={() => logout()}>Logout</button>) :
              (<div className="divButtonsHome">
                <Link to="/logIn"><button className="buttonsHomeLink">Login</button></Link>
                <Link to="/createAccount"><button className="buttonsHomeLink">Create Account</button></Link>
              </div>)
          }

        </div>
      </div>

    </div>
  );
}

Home.propTypes = {
  logout: PropTypes.func.isRequired,
  withAuth: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { logout, withAuth })(Home);
