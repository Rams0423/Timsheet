const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// Enable CORS and JSON body parsing
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for submitting timesheet data
app.post("/api/submit", (req, res) => {
  const data = req.body;

  if (!data || data.length === 0) {
    return res.status(400).send({ message: "No data received" });
  }

  // Vercel does not support file system writes in serverless functions
  // So we just log the data for now
  console.log("Received data:", data);

  res.status(200).send({ message: "Data received!" });
});

// Export the Express app for Vercel
module.exports = app;
