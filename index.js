const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;


app.use(cors());


// Function to generate a random binary number
const generateRandomBinary = (length = 8) => {
  return Array.from({ length }, () => (Math.random() < 0.5 ? "0" : "1")).join("");
};

// API endpoint
app.get("/random-binary", (req, res) => {
  const length = req.query.length ? parseInt(req.query.length) : 8;
  if (isNaN(length) || length <= 0) {
    return res.status(400).json({ error: "Invalid length parameter" });
  }

  res.json({ binary: generateRandomBinary(length) });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


