require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser")
const router = require("./router")
const mongoose = require("mongoose")

database_url = process.env.DATABASE_URL 
mongoose.connect(database_url).then(() =>{
    console.log("Database Connected");
    }
)

const app = express()
const port = 3000;
app.set("view engine", "ejs"); 
app.use(bodyParser({extended:false}));
app.set("views", __dirname + "/views");
app.use(router);


app.listen(port, ()=>{
    console.log(`App is Running at http://localhost:${port}`);
});