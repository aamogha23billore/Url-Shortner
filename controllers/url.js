const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).send("URL is required");

  // Ensure protocol
  let redirectUrl = body.url.trim();
  if (!redirectUrl.startsWith("http://") && !redirectUrl.startsWith("https://")) {
    redirectUrl = "https://" + redirectUrl;
  }

  // Generate shortId using nanoid
  const shortId = nanoid(8);

  await URL.create({
    shortId,
    redirectURL: redirectUrl,
    visitHistory: [],
    createdBy: req.user._id,
  });

  const allUrls = await URL.find({ createdBy: req.user._id });
  return res.render("home", { urls: allUrls, user: req.user });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });

  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
