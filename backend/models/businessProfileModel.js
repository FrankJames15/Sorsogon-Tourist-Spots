const mongoose = require("mongoose");

const businessProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BusinessProfile = mongoose.model(
  "BusinessProfile",
  businessProfileSchema
);

module.exports = BusinessProfile;
