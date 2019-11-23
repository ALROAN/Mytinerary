const { Router } = require("express");
const router = Router();
const {
  getUsers,
  getUser,
  postUser,
  authenticateUser,
  putUser,
  deleteUser
} = require("../controllers/UserCtrls");
const jwt = require('jsonwebtoken');

router.route("/").post(postUser);
router.route("/authenticate").post(authenticateUser)

module.exports = router;
