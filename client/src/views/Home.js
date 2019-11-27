import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


import { logout } from "../redux/actions/userActions"
import Header from "../components/Header";

const Home = ({ user, logout }) => {

  // useEffect(() => {
  //   console.log("logout");

  //   logout();

  // }, []);


  const isLogout = () => {
    console.log("logout");

    logout();
  }

  console.log(user);
  return (
    <div className="Home">
      <Header />
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
            (user._id) ?
              (<button className="buttonsHomeLink" onClick={isLogout}>Logout</button>) :
              (<Link to="/logIn"><button className="buttonsHomeLink">Login</button></Link>)
          }
          <Link to="/createAccount"><button className="buttonsHomeLink">Create Account</button></Link>
        </div>
      </div>

    </div>
  );
}

Home.propTypes = {
  logout: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  user: state.user.payload,
});

export default connect(mapStateToProps, { logout })(Home);
