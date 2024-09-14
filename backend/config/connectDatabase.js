const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // Establish a connection to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    // Log a successful connection
    console.log(
      `\nSuccessfully connected to database: ${conn.connection.host}`.cyan
        .underline
    );
  } catch (error) {
    // Enhanced error handling
    console.error(`Error connecting to MongoDB: ${error.message}`);

    // Optionally add more error details if available
    if (error.name === "MongoNetworkError") {
      console.error(
        "Network-related issue detected. Please check your network or MongoDB server."
      );
    }

    // Exit the process with failure
    process.exit(1);
  }

  // Listen for connection errors after the initial connection
  mongoose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err.message}`);
  });

  // Optionally listen for a disconnection event
  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected. Attempting to reconnect...");
    connectDB(); // Reconnect automatically
  });
};

module.exports = connectDB;
