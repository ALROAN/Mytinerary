import React, { useState} from "react";
import { Link } from "react-router-dom";

//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  cityButton: {
  marginBottom: "10px !important",
  width: "95vw",
  height: "20vh",
	border:"3px solid #942911",
	display:"inline-block",
	cursor:"pointer",
  color:"white",
  fontWeight:"bold",
	fontFamily:"Georgia",
	fontSize:"18px",
	padding:"32px 76px",
	textDecoration:"none",
  textShadow:"0px 0px 60px brown",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
  }
});


const CitySearch = ({content}) => {
  const classes = useStyles();

  const[allCities,setAllCities] = useState(content)
  const[citiesFound,setCitiesFound] = useState(content)

  const filterList = (e) => {
  let filteredCities = allCities.filter(city => {
    
    return (
      city.city.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
      e.target.value === ""
    );
  });
  setCitiesFound(filteredCities)
};

    return (
      <div>
        <div className="searchBarCitiesDiv">
          <TextField
            label="Search your City"
            type="search"
            margin="normal"
            onChange={filterList}/>
        </div>
        <div  >
          {citiesFound.map(function (city) {
            return (
              
              <Button
              style = { {"backgroundImage": "url("+ city.image +")"}}
                      key={city._id}
                      className={classes.cityButton}
                      color="primary"
                      component={Link}
                      to={`/itinerary/${city._id}`}>
                        {city.city} // {city.country}
                    </Button>
            );})}
        </div>
      </div>
    );
  }


export default CitySearch