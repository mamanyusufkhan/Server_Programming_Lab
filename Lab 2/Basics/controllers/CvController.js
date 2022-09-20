const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  workexperience = fs.readFileSync("data/workexperience", { encoding: "utf-8" });
  workexperience = JSON.parse(String(workexperience));

  language = fs.readFileSync("data/language", { encoding: "utf-8" });
  language = JSON.parse(String(language));

  skill = fs.readFileSync("data/skill", { encoding: "utf-8" });
  skill = JSON.parse(String(skill));

  console.log(req.body)
  
  var name = req.body.name;
  if (name == null){
    name = "Maman Yusuf Khan";
  }
  var occupation = req.body.occupation;
  if (occupation == null){
    occupation = "Designer";
  }
  var address = req.body.address;
  if (address == null){
    address = "London, UK";
  }
  var email = req.body.email;
  if (email == null){
    email = "ex@mail.com";
  }
  var number = req.body.number;
  if (number == null){
    number = 1224435534;
  }



  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  works = []
  for (let key in workexperience) {
    works.push(workexperience[key]);
  }
  lang = []
  for (let key in language) {
    lang.push(language[key]);
  }
  sk = []
  for (let key in skill) {
    sk.push(skill[key]);
  }


  


  res.render("cv", { name: name, occupation: occupation, address: address, email: email, number: number, educations: edus , workexperience: works, language: lang, skill: sk});
};



module.exports = { getCV: getCV };
