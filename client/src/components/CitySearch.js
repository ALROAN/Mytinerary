import React from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
// import Itinerary from "../views/Itinerary";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default class CitySearch extends React.Component {
  state = {
    allCities: [],
    citiesFound: []
  };

  filterList = e => {
    let citiesFound = this.state.allCities;
    citiesFound = citiesFound.filter(city => {
      return (
        city.city.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
        e.target.value === ""
      );
    });
    this.setState({ citiesFound: citiesFound });
  };

  componentDidMount = () => {
    this.setState({
      allCities: this.props.content,
      citiesFound: this.props.content
    });
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            id="standard-search"
            label="Search your City/Country"
            type="search"
            margin="normal"
            placeholder="Search your City"
            onChange={this.filterList}
          />
        </div>
        <div>
          {this.state.citiesFound.map(function (city) {
            return (
              <div key={city._id}>
                <div>
                  <div className="city-button" key={city._id}>
                    <Button
                      component={Link}
                      variant="outlined"
                      size="large"
                      color="inherit"
                      to={`/itinerary/${city._id}`}
                    >
                      {city.city}
                    </Button>
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
