const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const env = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/connectDatabase");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/tourist-spots", require("./routes/touristSpotsRoutes"));

app.use(errorHandler)

connectDB().then(() =>
  app.listen(PORT, () =>
    console.log(`\nServer started on PORT ${PORT}...`.yellow.bold)
  )
);

