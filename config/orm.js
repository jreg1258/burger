const connection = require("./connection")

const orm = {
    selectAll: (callback) => {
        const query = "SELECT * FROM" + tableName

        connection.query(query, (err, result)=>{
            if (err) throw err;
            callback(result)
        })},
    selectOne: (callback) => {
        const query = "SELECT ?? FROM ?? WHERE id = ?"
    }
}