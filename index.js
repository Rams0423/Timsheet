const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/submit", (req, res) => {
    const data = req.body;

    if (!data || data.length === 0) {
        return res.status(400).send({ message: "No data received" });
    }

    const filePath = "timesheet_data.json";
    
    // Save data to a JSON file
    fs.appendFile(filePath, JSON.stringify(data) + "\n", (err) => {
        if (err) {
            console.error("Error saving data:", err);
            return res.status(500).send({ message: "Failed to save data" });
        }
        console.log("Data saved successfully.");
        res.send({ message: "Data received and saved!" });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
