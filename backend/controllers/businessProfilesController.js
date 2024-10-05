const asyncHandler = require("express-async-handler");
const BusinessProfile = require("../models/businessProfileModel");
const Joi = require("joi"); // For validation

// Validation schema for adding/updating business profiles
const businessProfileSchema = Joi.object({
  name: Joi.string().required(),
  businessType: Joi.string().required(),
  address: Joi.object({
    barangay: Joi.string().required(),
    municipality: Joi.string().required(),
  }).required(),
  contact: Joi.object({
    phoneNumber: Joi.string()
      .pattern(/^\+?\d{10,15}$/)
      .required(),
    email: Joi.string().email().required(),
  }).required(),
  website: Joi.string().uri().optional(),
  description: Joi.string().optional(),
  details: Joi.string().optional(),
});

// @desc    Get all businessProfiles
// @route   GET /api/business-profiles
// @access  Public
const getBusinessProfiles = asyncHandler(async (req, res) => {
  const businessProfiles = await BusinessProfile.find({});
  res.status(200).json(businessProfiles);
});

// @desc    Get a businessProfile by ID
// @route   GET /api/business-profiles/:id
// @access  Public
const getBusinessProfileById = asyncHandler(async (req, res) => {
  const businessProfile = await BusinessProfile.findById(req.params.id);
  if (!businessProfile) {
    res.status(404).json({ message: "BusinessProfile not found" });
  } else {
    res.status(200).json(businessProfile);
  }
});

// @desc    Add a businessProfile
// @route   POST /api/business-profiles
// @access  Private/Admin
const addBusinessProfile = asyncHandler(async (req, res) => {
  // Validate the request body
  const { error } = businessProfileSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  const {
    name,
    businessType,
    address: { barangay, municipality },
    contact: { phoneNumber, email },
    website,
    description,
    details,
  } = req.body;

  const businessProfile = new BusinessProfile({
    name,
    businessType,
    address: {
      barangay,
      municipality,
    },
    contact: {
      phoneNumber,
      email,
    },
    website,
    description,
    details,
  });

  const createdBusinessProfile = await businessProfile.save();
  res.status(201).json(createdBusinessProfile);
});

// @desc    Update a businessProfile
// @route   PUT /api/business-profiles/:id
// @access  Private/Admin
const updateBusinessProfile = asyncHandler(async (req, res) => {
  const { error } = businessProfileSchema.validate(req.body, {
    allowUnknown: true,
  });
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  const updatedBusinessProfile = await BusinessProfile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedBusinessProfile) {
    res.status(404).json({ message: "BusinessProfile not found" });
  } else {
    res.status(200).json(updatedBusinessProfile);
  }
});

// @desc    Delete a businessProfile
// @route   DELETE /api/business-profiles/:id
// @access  Private/Admin
const deleteBusinessProfile = asyncHandler(async (req, res) => {
  const deletedBusinessProfile = await BusinessProfile.findByIdAndDelete(
    req.params.id
  );

  if (!deletedBusinessProfile) {
    res.status(404).json({ message: "BusinessProfile not found" });
  } else {
    res
      .status(200)
      .json({ message: "BusinessProfile removed", id: req.params.id });
  }
});

module.exports = {
  getBusinessProfiles,
  getBusinessProfileById,
  addBusinessProfile,
  updateBusinessProfile,
  deleteBusinessProfile,
};
