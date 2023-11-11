const {
  getProposals
} = require("./controllers/proposals.js");
const express = require('express');
const router = express.Router();

// api health check
router.get("/", (req, res) => {
  res.status(200).json({ msg: "health check passed! API is alive." });
});

/* ADD STUFF HERE */
router.get("/thesisProposals", getProposals);

module.exports = router;