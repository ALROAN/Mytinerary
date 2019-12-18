const userModel = require("../models/UserModel");
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

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
    const payload = { email };
    const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
    });
    res.cookie('token', token, { httpOnly: true })
      .sendStatus(200);
    // res.json(newUser);
  },

  authenticateUser: function (req, res) {
    const { email, password } = req.body;
    userModel.findOne({ email }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
            error: 'Internal error please try again'
          });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      } else {
        user.isCorrectPassword(password, function (err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
              });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
              });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true })
              .sendStatus(200);
          }
        });
      }
    });
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
  },
  logOut: (req, res) => res.clearCookie('token').sendStatus(200)
};

module.exports = UserCtrl;
