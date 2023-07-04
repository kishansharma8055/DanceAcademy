const mysql = require("mysql");

const con = mysql.createConnection({
    host: '',
    user: 'root',
    password: '',
    database: 'dance academy'
});

module.exports = con;
