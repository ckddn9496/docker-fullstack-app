var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'ckddn',
    database: 'myapp'
});

exports.pool = pool;