const asyncHandler = require("express-async-handler");

// @desc    Get all tourist spots
// @route   GET /api/tourist-spots
// @access  Public
const getSpots = asyncHandler(async (req, res) => {
  console.log(req.method, req.url);
  res.send("GET tourist spots");
});

// @desc    Add a tourist spot
// @route   POST /api/tourist-spots
// @access  Private/Admin
const addSpot = asyncHandler(async (req, res) => {
  console.log(req.method, req.url);
  res.send("PUT ADD tourist spots ");
});

// @desc    Update a tourist spot
// @route   PUT /api/tourist-spots/:id
// @access  Private/Admin
const updateSpot = asyncHandler(async (req, res) => {
  console.log(req.method, req.url, req.params.id);
  res.send("PUT UPDATE tourist spots by ID");
});

// @desc    Delete a tourist spot
// @route   DELETE /api/tourist-spots/:id
// @access  Private/Admin
const deleteSpot = asyncHandler(async (req, res) => {
  console.log(req.method, req.url, req.params.id);
  res.send("DELETE  tourist spots by ID");
});

module.exports = {
  getSpots,
  addSpot,
  updateSpot,
  deleteSpot
};