const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jor2004m",
    database: "game_store"
});

module.exports = db;