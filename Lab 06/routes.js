const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');
const { request } = require("express");

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'Images');
    },
    filename: (req, file, cb) => {
      console.log(file)
      cb(null, Date.now() + path.extname(file.originalname))

    }
})

const upload = multer({storage: storage})



router.get("/", homeController.getHome);
router.get('/login', homeController.getLogin);
router.get("/register", homeController.getRegister);
router.get('/logout', homeController.logOut);
router.get("/book-list", connectEnsureLogin.ensureLoggedIn(), bookController.getBookList);
router.get("/books", connectEnsureLogin.ensureLoggedIn(), bookController.getBook);
router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), homeController.getDashboard);
router.post("/books", connectEnsureLogin.ensureLoggedIn(), bookController.postBook);
router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login',
      successRedirect: '/dashboard',
    }), homeController.postLogin);

router.post('/register', homeController.postRegister);
router.get('/upload', homeController.getUpload); 
router.post('/upload', upload.single("image"), homeController.postUpload);
//router.post('/slideshow', homeController.getSlide);
router.post('/slideshow', homeController.getSlide);


module.exports = router;
