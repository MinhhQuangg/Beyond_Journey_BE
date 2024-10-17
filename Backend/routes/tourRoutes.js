const express = require("express");
const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`)
);

const router = express.Router();

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    tours,
  });
};

router.route("/").get(getAllTours);

module.exports = router;
