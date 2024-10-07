
const mongoose = require("mongoose");

// Reusable validation function for phone numbers
const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\+?\d{10,15}$/; // Allows for country codes and numbers from 10 to 15 digits
  return phoneRegex.test(phoneNumber);
};

// Reusable validation function for email
const validateEmail = (email) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

// Define Business Profile schema
const businessProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    businessType: {
      type: String,
      required: true,
    },
    address: {
      barangay: {
        type: String,
        required: true,
      },
      municipality: {
        type: String,
        required: true,
      },
      province: {
        type: String,
        required: false, // Optional
      },
      postalCode: {
        type: String,
        required: false, // Optional
      },
    },
    contact: {
      phoneNumber: {
        type: String,
        validate: {
          validator: validatePhoneNumber,
          message: (props) => `${props.value} is not a valid phone number!`,
        },
      },
      email: {
        type: String,
        validate: {
          validator: validateEmail,
          message: (props) => `${props.value} is not a valid email address!`,
        },
      },
    },
    website: {
      type: String,
      match: [/^https?:\/\/\S+/, "Please enter a valid URL."], // Simple URL validation
      required: false,
    },
    description: {
      type: String,
      required: false, // Optional, but you can make it required if needed
    },
    details: {
      type: String,
      required: false, // Optional
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const BusinessProfile = mongoose.model(
  "BusinessProfile",
  businessProfileSchema
);

module.exports = BusinessProfile;
