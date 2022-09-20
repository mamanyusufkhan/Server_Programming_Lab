const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");
const { getForm } = require("./controllers/FormController");

const fs = require("fs");

router.get("/", getCV);
router.get("/information", getForm);
router.post("/", getCV);


module.exports = router;
