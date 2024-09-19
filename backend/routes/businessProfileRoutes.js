const express = require("express");
const router = express.Router();
const {
  getBusinessProfiles,
  getBusinessProfileById,
  addBusinessProfile,
  updateBusinessProfile,
  deleteBusinessProfile,
} = require("../controllers/businessProfilesController");

router.route("/").get(getBusinessProfiles).post(addBusinessProfile);
router.route("/:id").get(getBusinessProfileById).put(updateBusinessProfile).delete(deleteBusinessProfile);

module.exports = router;
