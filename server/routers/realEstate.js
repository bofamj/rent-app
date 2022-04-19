const express = require("express");
const router = express.Router();
const { getAllBlogs } = require("../controllers/realEstate");

//router.get("/rent", getAllBlogs);
router.route("/rent").get(getAllBlogs);

module.exports = router;
