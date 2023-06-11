const mysql = require("mysql");

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dance academy'
});

module.exports = con;