const express = require("express");
const app = express();
const path = require("path")
const hbs = require("hbs");
const port = process.env.PORT || 8000;
// const addData = require("../public/login")
// addData()

// Mongoose
// const mongoose = require("mongoose");

// Mongoose connect mongodb to nodeJS 
// mongoose.connect("mongodb://localhost:27017/dynamicdb").then(() => console.log("connected")).catch((err) => console.error(err))

/*
    *** schema                      
    *** A Mongoose schema defines the structure of the document
    *** Default values, validations, etc.   
*/

// const dynamicDataSchema = new mongoose.Schema({
//     userID: String,
//     userEmail: String
// })
// models
// A Mongoose Model is wrapper on the mongoose Schema
// Mongoose Model provide an interface to the database for creat, querying, updating, deleting records etc.
// const DynamicData = new mongoose.model("DynamicData", dynamicDataSchema)

// create document or insert

// const dynamicDataList = new DynamicData({
//     userID: "nirov",
//     userEmail: "dasda"
// })

// dynamicDataList.save();

const STATIC_PATH = path.join(__dirname, "../public")
const TEMPLATE_PATH = path.join(__dirname, "../templates/views")
const PARTIALS_PATH = path.join(__dirname, "../templates/partials")

// To set the view Engine
app.set('view engine', 'hbs')
// To customize your views directory
app.set("views", TEMPLATE_PATH)
// To set partials in express js
hbs.registerPartials(PARTIALS_PATH)

// Build in Middleware
app.use(express.static(STATIC_PATH))
// Index
app.get("/", (req, res) => {
    res.render("index",
        {
            name: "about",
            login: "login"
        }
    )
})
// About
app.get("/about", (req, res) => {
    res.render("about",
        {
            name: "about Us"
        }
    );
})

app.get("/login", (req, res) => {
    res.render("login",
        {
            login: "login Page"
        }
    );
})

app.get("/", (req, res) => {
    res.send(
        `<h1><em>Hello Home Page</em></h1>`
    )
    res.sendFile(path.join(__dirname, "../public", "index.html"))
})
app.get("/about", (req, res) => {
    res.send("Hello about Page")
})
app.get("/contact", (req, res) => {
    res.send("Hello contact Page")
})

app.get("/about/*", (req, res) => {
    res.render("404",
        {
            errorMSG: "This About page couldn't found"
        }
    );
})
app.get("*", (req, res) => {
    res.render("404",
        {
            errorMSG: "Page couldn't Found"
        }
    );
})

app.listen(port, () => {
    console.log(`Port listen at localhost:${port}`);
});