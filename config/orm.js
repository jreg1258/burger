const connection = require("./connection")

const tableName = "burgers"

const orm = {
    selectAll: (callback) => {
        const query = "SELECT * FROM " + tableName

        connection.query(query, (err, result)=>{
            if (err) throw err;
            callback(result)
        })},
    selectOne: (name,callback) => {
        const query = "SELECT * FROM "+tableName+" WHERE id = ?"

        connection.query(query, [name], (err,result)=>{
            if (err) throw err;
            callback(result)
        })},
    updateOne: (burger, id, callback) => {
        const col = "burger_name"
        const query = "UPDATE "+tableName+" SET "+col+"="+burger+" WHERE id = ?;"

        connection.query(query, [id], (err, result)=>{
            if (err) throw err;
            callback(result)
        })
    }
}