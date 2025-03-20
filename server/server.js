const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

const path = require('path');
app.use(express.static(path.join(__dirname, '../client/build')));


// Global Error Handling
app.use((err, req, res, next) => {
  console.error(" Server Error:", err.message);
  res.status(500).json({ message: "Server Error" });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
