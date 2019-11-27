import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom'

import { fetchCities } from "../redux/actions/citiesAction";

import CitySearch from "../components/CitySearch";
import Loader from "../components/Loader";

const Cities = ({ fetchCities, cities, user }) => {
  console.log(user);

  useEffect(() => {
    fetchCities();
  }, []);

  return (

    (user) ? (cities.length !== 0 ?
      (<div className="cities">
        <CitySearch content={cities} />
      </div>) : <Loader />) : (<Redirect to="/logIn" />)

  )

};

Cities.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  cities: state.cities.payload,
  user: state.user.payload
});

export default connect(mapStateToProps, { fetchCities })(Cities);
