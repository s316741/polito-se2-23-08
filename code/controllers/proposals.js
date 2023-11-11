// import models here
const pool = require("../db/connection");

const getProposals = async (req, res) => {
  try {
    const results = await pool
    .query("SELECT * FROM thesis_proposal")
    .then((result) => {
      return res.status(200).json({msg: "OK", data: result.rows});
    })
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: "An unknown error occurred." });
  }
};

module.exports = {
  getProposals,
};