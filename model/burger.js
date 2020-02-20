const orm = require("../config/orm")

const burger = {
  all: (callback)=>{
    orm.selectAll((result)=>{
    callback(result)
      })},
  
  devour: (id, callback)=>{
    orm.devour(id, (result)=>{
      callback(result)
      })},
  create: (name, callback)=>{
    orm.create(name, (result)=>{
      callback(result)
      })}
      }
  
module.exports = burger;
