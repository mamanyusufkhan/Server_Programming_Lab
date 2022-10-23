const homePage = (req, res) =>{
    res.render("Helloworld.ejs");
}

module.exports = { homePage: homePage };