const mongoose = require("mongoose");

const touristSpotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TouristSpot = mongoose.model("Spot", touristSpotSchema);

module.exports = TouristSpot;
