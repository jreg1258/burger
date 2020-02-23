const express = require("express");
const burger = require("../models/burger")

const router = express.Router()

router.get(__dirname + "/public", function(req, res) {
    burger.all(function(data) {
      const burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });
  
  
  router.get("/", function(req, res){
      res.redirect("/burgers") //automatically returns to index because calls the slash burger route
  })
  
  router.get("/burgers", function(req, res){
      burger.all((burgerData)=>{
          res.render("index", {burger_Data: burgerData}) //in handle bar page reference burgerdata as so: burger_Data
      })
  })
  
  router.post("/burgers/create", function(req, res){
      burger.create(req.body.name, function(result){
          console.log(result)
          res.redirect("/burgers")
      }) // in public folder have js folder taht calls these routes and then creates the burger
  })
  
  router.put("/burgers/:id", function(req, res){
      burger.devour(req.body.id, function(result){
          console.log(result)
          res.sendStatus(200)
      })
  })
  
  module.exports = router;