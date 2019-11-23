import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Activities from "./components/Activity";
import withAuth from "./components/WithAuth"

import Cities from "./views/Cities";
import Home from "./views/Home";
import LogIn from "./views/LogIn";
import Itinerary from "./views/ItineraryById";
import CreateAccount from "./views/CreateAccount";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="appContainer">
          <div className="views">
            <Route exact path="/" component={Home} />
            <Route path="/cities" component={withAuth(Cities)} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/logIn" component={LogIn} />
            <Route path="/itinerary/:cityId" component={Itinerary} />
            <Route path="/activities/:itinerayId" component={Activities} />
          </div>
          <Footer className="footer" />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
