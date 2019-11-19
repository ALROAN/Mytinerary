import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Cities from "./views/Cities";
import Home from "./views/Home";
import LogIn from "./views/LogIn";
import Itinerary from "./views/ItineraryById";
import Activities from "./components/Activity";
import CreateAccount from "./views/CreateAccount";

function App() {
  // solo se muestra lo que esta aqui dentro

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
