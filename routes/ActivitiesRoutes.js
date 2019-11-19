const { Router } = require("express");
const router = Router();
const {
  postActivity,
  getActivity,
  putActivity,
  deleteActivity
} = require("../controllers/ActivityCtrls");

router.route("/:itineraryId").post(postActivity);
router.route("/:itineraryId").get(getActivity);
router
  .route("/:itineraryId/:id")
  .put(putActivity)
  .delete(deleteActivity);

module.exports = router;
