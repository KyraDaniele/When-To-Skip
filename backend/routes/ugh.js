const express = require("express");
const router = express.Router();
const ughClass = require("../models/ugh");

router.get("/", async (req, res) => {
	const ughData = await ughClass.getInfo();
	res.json(ughData).status(200);
});

module.exports = router;
