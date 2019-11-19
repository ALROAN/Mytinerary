const activitiesModel = require("../models/ActivitiesModels");

const activitiyCtrl = {
  getActivity: async (req, res) => {
    const activityById = await activitiesModel.find({
      itineraryId: req.params.itineraryId
    });

    res.json(activityById);
  },

  postActivity: (req, res) => {
    const { title, image, itineraryId } = req.body;
    const newactivity = new activitiesModel(req.params.itineraryId, {
      title,
      image,
      itineraryId
    });
    newactivity.save();
    res.json(newactivity);
  },

  putActivity: async (req, res) => {
    const updateactivity = ({ title, image, itineraryId } = req.body);
    await activitiesModel.findOneAndUpdate({
      title,
      image,
      itineraryId
    });

    res.send(updateactivity, req.params.id, req.params.itineraryId);
  },

  deleteActivity: async (req, res) => {
    const deleteactivity = await activitiesModel.findByIdAndDelete(
      req.params.id,
      req.params.itineraryId
    );
    res.send(deleteactivity);
  }
};

module.exports = activitiyCtrl;
