const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'bijikadal',
    database : 'moviepurwadhika'
})

module.exports = db