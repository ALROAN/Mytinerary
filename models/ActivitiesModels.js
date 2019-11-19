const { Schema, model } = require("mongoose");

const ActivitySchema = new Schema({
  itineraryId: {
    type: String
  },
  image: {
    type: String
  },
  title: {
    type: String
  }
});
module.exports = model("activities", ActivitySchema);
