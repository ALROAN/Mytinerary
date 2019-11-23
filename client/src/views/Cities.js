import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchCities } from "../redux/actions/citiesAction";
import CitySearch from "../components/CitySearch";
import Loader from "../components/Loader";

const Cities = ({ fetchCities, cities }) => {
  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className="cities">
      {cities.length !== 0 ? (
        <CitySearch content={cities}></CitySearch>
      ) : (
          <Loader></Loader>
        )}
    </div>
  );
};

Cities.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cities: state.cities.payload
});

export default connect(mapStateToProps, { fetchCities })(Cities);
