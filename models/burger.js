const orm = require ('../config/orm.js')

var burgers = {
    all: function(callBack){
        orm.all("burgers", function(result){
            callBack(result);
        })
    },

    create: function(burgerName, callBack){
        orm.create("burgers",["burger_name", "devoured"], [burgerName, false], callBack)
    },

    update: function(id, callBack){
        var condition = "id = " + id;
        orm.update("burgers", { devoured: true}, condition, callBack);
    }
}


module.exports = burgers