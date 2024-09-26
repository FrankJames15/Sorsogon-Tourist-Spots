const mongoose = require("mongoose");

const touristSpotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    details: {
      type: String,
      // required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const TouristSpot = mongoose.model("Spot", touristSpotSchema);

module.exports = TouristSpot;
