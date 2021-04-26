let mysql = require('mysql');

//koneksi db
const conn = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: ``,
    database: `udyazid`
});

conn.connect((err) => {
    if (err) throw err;
    console.log(`Mysql terhubung`);
});

module.exports = conn;