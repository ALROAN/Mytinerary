import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Footer from "./components/Footer";
import Activities from "./components/Activity";

import { withAuth } from "./redux/actions/userActions"

import Cities from "./views/Cities";
import Home from "./views/Home";
import LogIn from "./views/LogIn";
import Itinerary from "./views/ItineraryById";
import CreateAccount from "./views/CreateAccount";

function App({ withAuth, user }) {

  useEffect(() => {
    console.log(user);

    withAuth();
  }, []);

  return (
    <Router>
      <div className="appContainer">
        <div className="views">
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/createAccount" component={CreateAccount} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/itinerary/:cityId" component={Itinerary} />
          <Route path="/activities/:itinerayId" component={Activities} />
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
}




App.propTypes = {
  withAuth: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user.payload
});

export default connect(mapStateToProps, { withAuth })(App);

