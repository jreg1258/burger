const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT||3030
// Requiring our models for syncing
const db = require("./models");
const route = require("./controllers/burgers_controller")
const exphbs = require("express-handlebars");

// Static directory
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route)

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, (err,_)=>{
        if (err) throw err;
        console.log("Listening on http://localhost:"+PORT)
    })
});