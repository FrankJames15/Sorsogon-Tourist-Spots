const mongoose = require("mongoose");

const touristSpotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Trims whitespace
      unique: true, // Ensures uniqueness
      index: true, // Index for better performance in searches
    },
    address: {
      barangay: {
        type: String,
        required: true,
        trim: true,
      },
      municipality: {
        type: String,
        required: true,
        trim: true,
      },
    },
    description: {
      type: String,
      required: true,
      // minlength: 10, // Ensures meaningful description
      maxlength: 500,
    },
    details: {
      type: String,
      required: true,
      // minlength: 10,
      maxlength: 1000,
    },
    images: [
      {
        name: {
          type: String,
          required: true, // Ensure every image has a name
        },
        path: {
          type: String,
          required: true, // Ensure every image has a path
        },
        uploadedAt: {
          type: Date,
          default: Date.now, // Track when each image was uploaded
        },
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review", // Reference to Review model
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const TouristSpot = mongoose.model("TouristSpot", touristSpotSchema);

module.exports = TouristSpot;
