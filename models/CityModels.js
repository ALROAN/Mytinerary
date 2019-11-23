const { Schema, model } = require("mongoose");

const CitySchema = new Schema({
  city: {
    type: String
  },
  country: {
    type: String
  },
  image: {
    type: String
  }
});
module.exports = model("cities", CitySchema);
