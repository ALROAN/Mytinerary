const { Router } = require("express");
const router = Router();
const {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser
} = require("../controllers/UserCtrls");

router.route("/").post(postUser);

module.exports = router;
