import React, { Component } from "react";

class cityList extends Component {
  // state = {
  //   citiesList: [],
  //   newCity: {
  //     city: "",
  //     country: ""
  //   }
  // };

  // async componentDidMount() {
  //   this.getCities();
  // }

  // getCities = async () => {
  //   // const res = await axios.get("http://localhost:5000/api/cities/");
  //   this.setState({ citiesList: res.data });
  // };

  // onChangeNewCity = e => {
  //   this.setState({
  //     city: e.target.value
  //   });
  // };

  // onChangeNewCountry = e => {
  //   this.setState({
  //     country: e.target.value
  //   });
  // };

  // onSubmit = async e => {
  //   e.preventDefault();
  //   await axios.post("http://localhost:5000/api/cities/", {
  //     city: this.state.city,
  //     country: this.state.country
  //   });
  //   this.setState({ city: "", country: "" });
  //   this.getCities();
  //   console.log(this.state.city, this.state.country);
  // };

  // deleteCity = async id => {
  //   await axios.delete("http://localhost:5000/api/cities/" + id);
  //   this.getCities();
  // };

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <div className="card card-body">
            <h3>Create new city</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <p>City</p>
                <input
                  value={this.state.city}
                  type="text"
                  className="form-control"
                  onChange={this.onChangeNewCity}
                />
                <p>Country</p>
                <input
                  value={this.state.country}
                  type="text"
                  className="form-control"
                  onChange={this.onChangeNewCountry}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div> */}
        </div>
        <div className="row">
          {/* <ul className="list-group col-8 offset-md-2">
            {this.state.citiesList.map(city => (
              <li
                className="list-group-item list-group-item-action pb-3"
                key={city._id}
                onClick={() => this.deleteCity(city._id)}
              >
                City: {city.city} | | | Country: {city.country}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default cityList;
