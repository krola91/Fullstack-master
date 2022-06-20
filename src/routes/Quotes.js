const express = require("express");
const router = express.Router();
const Quote = require("../models/Quotes");

// Get all routes
router.get("/", async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
});

// Create new quotes
router.post("/new", async (req, res) => {
  const newQuote = new Quote(req.body);
  const saveQuote = await newQuote.save();
  res.json(savedQuote);
});

// Get specific quote
router.get("/get/:id", async (req, res) => {
  const q = await Quote.findById({ _id: req.params.id });
  res.json(q);
});

// Delete quotes
router.delete("/delete/:id", async (req, res) => {
  const result = await Quote.findByIdAndDelete({ _id: req.params.id });
  res.json(result);
});

//Update
router.patch("/update/:id", async (req, res) => {
  const q = await Quote.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json(q);
});

module.exports = router;
