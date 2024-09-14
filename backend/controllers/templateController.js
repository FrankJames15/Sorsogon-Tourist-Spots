const asyncHandler = require("express-async-handler");

const test = asyncHandler(async (req, res) => {
  console.log(req.method, req.url);
  res.send("Route is working...");
});

module.exports = {
  test,
};