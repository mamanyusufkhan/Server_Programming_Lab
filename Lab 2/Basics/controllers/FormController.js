const fs = require("fs");

const getForm = (req, res) => {
    res.render("information");
}



module.exports = { getForm: getForm };