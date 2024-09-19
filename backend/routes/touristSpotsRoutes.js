const express = require("express");
const router = express.Router();
const {
  getSpots,
  getSpotById,
  addSpot,
  updateSpot,
  deleteSpot,
} = require("../controllers/touristSpotsController");

router.route("/").get(getSpots).post(addSpot);
router
  .route("/:id")
  .get(getSpotById)
  .put(updateSpot)
  .delete(deleteSpot);

module.exports = router;
