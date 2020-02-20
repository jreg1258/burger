const connection = require("./connection")

const tableName = "burgers"

const orm = {
    selectAll: (callback) => {
        const query = "SELECT * FROM " + tableName

        connection.query(query, (err, result)=>{
            if (err) throw err;
            callback(result)
        })},
    create: (name,callback) => {
        const query = "INSERT INTO "+tableName+"(burger, devoured) VALUES(?,?)"

        connection.query(query, [name,0], (err,result)=>{
            if (err) throw err;
            callback(result)
        })},
    devour: (id, callback) => {
        const col = "devoured"
        const query = "UPDATE "+tableName+" SET "+col+"=1 WHERE id = ?;"

        connection.query(query, [id], (err, result)=>{
            if (err) throw err;
            callback(result)
        })
    }
}
