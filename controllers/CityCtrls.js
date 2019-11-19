const cityModel = require("../models/CityModels");

const cityCtrl = {
  getCities: async (req, res) => {
    const cities = await cityModel.find();
    res.json(cities);
  },

  postCities: async (req, res) => {
    const { city, country } = req.body;
    const newCity = new cityModel({
      city,
      country
    });
    await newCity.save();
    res.json(newCity);
  },

  getCity: async (req, res) => {
    const cityById = await cityModel.findById(req.params.id);

    res.json(cityById);
  },

  putCity: async (req, res) => {
    const updateCity = ({ city, country } = req.body);
    await cityModel.findOneAndUpdate(req.params.id, {
      city,
      country
    });

    res.send(updateCity);
  },

  deleteCity: async (req, res) => {
    const cityDelete = await cityModel.findByIdAndDelete(req.params.id);
    res.send(cityDelete);
  }
};

module.exports = cityCtrl;
