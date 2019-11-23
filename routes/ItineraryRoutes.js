const { Router } = require("express");
const router = Router();
const {
  getItineraries,
  postItinerary,
  getItinerary,
  putItinerary,
  deleteItinerary
} = require("../controllers/ItineraryCtrls");
const withAuth = require('../middleware/middleware');

router.route("/").get(getItineraries);
router.route("/:cityId").post(postItinerary);
router.route("/:cityId").get(getItinerary);
router
  .route("/:cityId/:id")
  .put(putItinerary)
  .get(getItinerary)
  .delete(deleteItinerary);

module.exports = router;
