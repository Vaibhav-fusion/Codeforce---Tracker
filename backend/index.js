import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ status: "Backend is shealydy" });
});

// config
const PORT = 3000;

// db + server
app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});