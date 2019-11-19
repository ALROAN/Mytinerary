const { Schema, model } = require("mongoose");

const ItinerarySchema = new Schema({
  title: {
    type: String
  },
  profilePic: {
    type: String
  },
  price: {
    type: String
  },
  duration: {
    type: Number
  },
  likes: {
    type: Number
  },
  hashtag: {
    type: Array
  },
  cityId: {
    type: String
  }
});
module.exports = model("itinerary", ItinerarySchema);
