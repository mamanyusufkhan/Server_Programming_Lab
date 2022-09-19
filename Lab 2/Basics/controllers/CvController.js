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


  


  res.render("cv", { name: "Maman Yusuf Khan", educations: edus , workexperience: works, language: lang, skill: sk});
};

module.exports = { getCV: getCV };
