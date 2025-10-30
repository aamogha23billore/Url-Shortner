const express = require("express");
const { handleGenerateNewShortURL, handleGetAnalytics } = require("../controllers/url");
const URL = require("../models/url");

const router = express.Router();

// Generate new short URL
router.post("/", handleGenerateNewShortURL);

// Analytics
router.get("/analytics/:shortId", handleGetAnalytics);

// Redirect short URL
router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  if (!entry) return res.status(404).send("Short URL not found");
  res.redirect(entry.redirectUrl);
});

module.exports = router;
