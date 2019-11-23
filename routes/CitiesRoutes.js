const { Router } = require("express");
const router = Router();
const withAuth = require("../middleware/middleware")

const {
  getCities,
  postCities,
  getCity,
  putCity,
  deleteCity
} = require("../controllers/CityCtrls");


router
  .route("/")
  .get(withAuth, getCities)
  .post(postCities);
router
  .route("/:id")
  .get(getCity)
  .put(putCity)
  .delete(deleteCity);

module.exports = router;
