const asyncHandler = require("express-async-handler");
const Spot = require("../models/touristSpotModel");

// @desc    Get all tourist spots
// @route   GET /api/tourist-spots
// @access  Public
const getSpots = asyncHandler(async (req, res) => {
  const spots = await Spot.find({});
  res.status(200).json(spots);
});

const getSpotById = asyncHandler(async (req, res) => {
  const spot = await Spot.findById(req.params.id);
  if (!spot) {
    res.status(404);
    throw new Error("Spot not found");
  }
  res.json(spot);
});

// @desc    Add a tourist spot
// @route   POST /api/tourist-spots
// @access  Private/Admin
const addSpot = asyncHandler(async (req, res) => {
  const { name, address, description, details } = req.body;
  const spot = new Spot({
    name,
    address,
    description,
    details,
  });
  const createdSpot = await spot.save();
  res.status(201).json(createdSpot);
});

// @desc    Update a tourist spot
// @route   PATCH /api/tourist-spots/:id
// @access  Private/Admin
const updateSpot = asyncHandler(async (req, res) => {

  const spot = await Spot.findById(req.params.id);

  if (!spot) {
    res.status(404);
    throw new Error("Spot not found");
  }
  
  const updateSpot = await Spot.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.json(updateSpot);
});

// @desc    Delete a tourist spot
// @route   DELETE /api/tourist-spots/:id
// @access  Private/Admin
const deleteSpot = asyncHandler(async (req, res) => {
  const result = await Spot.deleteOne({ _id: req.params.id });
  if (result.deletedCount === 0) {
    res.status(404);
    throw new Error("Spot not found");
  }

  res.json({ message: "Spot removed", id: req.params.id });
});

module.exports = {
  getSpots,
  getSpotById,
  addSpot,
  updateSpot,
  deleteSpot,
};
