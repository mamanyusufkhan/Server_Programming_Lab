const userModel = require("../models/userDetails");

const getHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

const getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

const postLogin = (req, res) => {
  console.log(req.user);
}

const getDashboard = (req, res) =>{
  res.render('dashboard', { title: 'Dashboard' })
}

const logOut = (req, res)=>{
  req.logout(()=>{
  console.log("Logging out!")
  });
  res.redirect('/');
}

const getRegister = (req, res) => {
  res.render('register', { title: 'Register' });
};

const postRegister = (req, res) => {
  const data = new userModel({
    username: req.body.username,
    password: req.body.password,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/login");
    });
}

const getUpload = (req, res) => {
    res.render("upload", {title: "upload"});
}

const postUpload = (req, res) => {
    res.send("Image Uploaded");
}

const getSlide = (req, res) => {
    res.render("slideshow", {title: "slideshow"});
}


module.exports = { getHome, getLogin, postLogin, getDashboard, logOut, getRegister, postRegister, getUpload, postUpload, getSlide};
