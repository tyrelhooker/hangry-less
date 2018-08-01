//Require dependencies ==========================
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Initalize port ===============================
const PORT = process.env.PORT || 3001;

// Define middleware ============================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets for heroku ============
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Initialize routes ============================
app.use(routes);

// Connect to Mongo =============================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3recipelist");

// Start API server =============================
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
