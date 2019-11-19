import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div>
        {" "}
        <p>
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>{" "}
      </div>
      <div>
        <h1>Start browsing</h1>
        <Link to="/cities">
          <img
            className="circledRight"
            src={require("../assets/circledRight.png")}
            alt="right"
          />{" "}
        </Link>
      </div>
      <p>Want to build your own MYtinenray?</p>
      <Link to="/">
        <img
          className="homeIcon"
          src={require("../assets/homeIcon.png")}
          alt="goHome"
        ></img>
      </Link>
    </div>
  );
}
