const express = require("express");
const router = express.Router();
const {
  getSpots,
  addSpot,
  updateSpot,
  deleteSpot,
} = require("../controllers/touristSpotsController");

router.route("/").get(getSpots).post(addSpot);
router.route("/:id").put(updateSpot).delete(deleteSpot);

module.exports = router;
