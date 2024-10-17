const express = require("express");

const router = express.Router();

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    users,
  });
};

router.route("/").get(getAllUsers);

module.exports = router;
