const asyncHandler = require("express-async-handler");
const BusinessProfile = require("../models/businessProfileModel");

// @desc    Get all  businessProfiles
// @route   GET /api/business-profiles
// @access  Public
const getBusinessProfiles = asyncHandler(async (req, res) => {
  const business_profile = await BusinessProfile.find({});
  res.status(200).json(business_profile);
});

// @desc    Get a businessProfile by ID
// @route   GET /api/business-profiles/:id
// @access  Public
const getBusinessProfileById = asyncHandler(async (req, res) => {
  const business_profile = await BusinessProfile.findById(req.params.id);
  if (!business_profile) {
    res.status(404);
    throw new Error("BusinessProfile not found");
  }
  res.json(business_profile);
});

// @desc    Add a business_profile
// @route   POST /api/businessProfile
// @access  Private/Admin
const addBusinessProfile = asyncHandler(async (req, res) => {
  const {
    name,
    businessType,
    address,
    description,
    details,
    contactNumber,
    website,
  } = req.body;
  const business_profile = new BusinessProfile({
    name,
    businessType,
    address,
    description,
    details,
    contactNumber,
    website,
  });
  const created_business_profile = await business_profile.save();
  res.status(201).json(created_business_profile);
});

// @desc    Update a business_profile
// @route   PUT /api/businessProfile/:id
// @access  Private/Admin
const updateBusinessProfile = asyncHandler(async (req, res) => {
  const business_profile = await BusinessProfile.findById(req.params.id);
  if (!business_profile) {
    res.status(404);
    throw new Error("BusinessProfile not found");
  }
  const updated_business_profile = await BusinessProfile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.json(updated_business_profile);
});

// @desc    Delete a business_profile
// @route   DELETE /api/businessProfile/:id
// @access  Private/Admin
const deleteBusinessProfile = asyncHandler(async (req, res) => {
  const result = await BusinessProfile.deleteOne({ _id: req.params.id });
  if (result.deletedCount === 0) {
    res.status(404);
    throw new Error("BusinessProfile not found");
  }

  res.json({ message: "BusinessProfile removed", id: req.params.id });
});

module.exports = {
  getBusinessProfiles,
  getBusinessProfileById,
  addBusinessProfile,
  updateBusinessProfile,
  deleteBusinessProfile,
};
