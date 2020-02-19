const express = require("express");
const router = express.Router();
const testClass = require("../models/test");

router.get("/", async (req, res) => {
	const testData = await testClass.getInfo();
	res.json(testData).status(200);
});

module.exports = router;
