const userModel = require("../models/UserModel");

const UserCtrl = {
  getUsers: async (req, res) => {
    const allUsers = await userModel.find();
    res.json(allUsers);
  },

  getUser: async (req, res) => {

    const UserById = await userModel.find({
      userName: req.params.userName
    });

    res.json(UserById);
  },

  postUser: (req, res) => {
    const {
      userName,
      password,
      email,
      firstName,
      lastName,
      avatar,
      country,
      registerDate
    } = req.body;
    const newUser = new userModel({
      userName,
      password,
      email,
      firstName,
      lastName,
      avatar,
      country,
      registerDate
    });
    newUser.save();
    res.json(newUser);
  },

  putUser: async (req, res) => {
    const updateUser = ({
      userName,
      password,
      email,
      firstName,
      lastName,
      avatar,
      country,
      registerDate
    } = req.body);
    await userModel.findOneAndUpdate({
      userName,
      password,
      email,
      firstName,
      lastName,
      avatar,
      country,
      registerDate
    });

    res.send(updateUser, req.params.userName, req.params.password);
  },

  deleteUser: async (req, res) => {
    const deleteUser = await userModel.findByIdAndDelete(
      req.params.userName,
      req.params.password
    );
    res.send(deleteUser);
  }
};

module.exports = UserCtrl;
