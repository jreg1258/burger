const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT||3030

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const route = require("./controllers/burgers_controller")

app.use(route)

app.listen(PORT, (err,_)=>{
    if (err) throw err;
    console.log("Listening on http://localhost:"+PORT)
})