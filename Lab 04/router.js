const express = require("express");
const router = express.Router();
const { homePage } = require("./controllers/HomeController");
const { getBookList , getBookForm, postBook} = require("./controllers/bookController");

const fs = require("fs");

router.get("/", homePage);
router.get("/booklist", getBookList);
router.get("/books", getBookForm);
router.post("/books", postBook);



module.exports = router;