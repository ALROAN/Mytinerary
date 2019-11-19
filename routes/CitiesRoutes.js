const { Router } = require("express");
const router = Router();

const {
  getCities,
  postCities,
  getCity,
  putCity,
  deleteCity
} = require("../controllers/CityCtrls");

router
  .route("/")
  .get(getCities)
  .post(postCities);
router
  .route("/:id")
  .get(getCity)
  .put(putCity)
  .delete(deleteCity);

module.exports = router;
