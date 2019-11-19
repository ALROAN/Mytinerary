const itinerayModel = require("../models/ItineraryModels");

const itineraryCtrl = {
  getItineraries: async (req, res) => {
    const allItineraries = await itinerayModel.find();
    res.json(allItineraries);
  },

  getItinerary: async (req, res) => {

    const itineraryById = await itinerayModel.find({
      cityId: req.params.cityId
    });

    res.json(itineraryById);
  },

  postItinerary: (req, res) => {
    const {
      title,
      profilePic,
      price,
      duration,
      likes,
      hashtag,
      cityId
    } = req.body;
    const newItinerary = new itinerayModel(req.params.cityId, {
      title,
      profilePic,
      price,
      duration,
      likes,
      hashtag,
      cityId
    });
    newItinerary.save();
    res.json(newItinerary);
  },

  putItinerary: async (req, res) => {
    const updateItinerary = ({
      title,
      profilePic,
      price,
      duration,
      likes,
      hashtag,
      cityId
    } = req.body);
    await itinerayModel.findOneAndUpdate({
      title,
      profilePic,
      price,
      duration,
      likes,
      hashtag,
      cityId
    });

    res.send(updateItinerary, req.params.id, req.params.cityId);
  },

  deleteItinerary: async (req, res) => {
    const deleteItinerary = await itinerayModel.findByIdAndDelete(
      req.params.id,
      req.params.cityId
    );
    res.send(deleteItinerary);
  }
};

module.exports = itineraryCtrl;
