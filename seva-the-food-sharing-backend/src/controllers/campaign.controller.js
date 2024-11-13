const express = require("express");

const router = express.Router();

const Campaign = require("../models/Campaign.model")

router.get("/", async (req, res) => {
    const campaigns = await Campaign.find({}).lean().exec();

    res.status(200).send(campaigns)
});

module.exports = router;