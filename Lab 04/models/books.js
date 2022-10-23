const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    author:{
        required: true,
        type: String
    },
    genre:{
        required: true,
        type: String
    }

});

module.exports = mongoose.model("books", schema)