const { Router } = require("express");
const router = Router();
const {
  getUsers,
  getUser,
  postUser,
  authenticateUser,
  putUser,
  deleteUser,
  logOut
} = require("../controllers/UserCtrls");
const jwt = require('jsonwebtoken');

router.route("/").post(postUser);
router.route("/authenticate").post(authenticateUser)
router.route("/logout").delete(logOut)

module.exports = router;
