const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
})

module.exports = connection;