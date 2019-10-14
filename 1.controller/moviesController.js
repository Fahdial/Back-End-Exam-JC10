const db = require('../database');
const movies = 'movies'
const movcat = 'movcat'

module.exports = {
    getListMovie: (req, res) => {
        let sql = `select * from ${movies}`
        db.query(sql, (err, result) => {
            if (err) throw err

            res.send(result)  
        })
    },
    addMovie: (req, res) => {
        let { judul, tahun, description } = req.body
        let sql = `insert into ${movies} (judul, tahun, description) values ('${judul}', ${tahun}, '${description}')`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    editMovie: (req, res) => {
        let { id, judul, tahun, description } = req.body
        let sql = `update ${movies} set judul = '${judul}', tahun = ${tahun}, description = '${description}' where id = ${id}`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    
    deleteMovie: (req, res) => {
        let { id } = req.body
        let sql1 = `delete from ${movcat} where idMovie = (select movies.id from ${movies} where id = ${id})`        
        let sql2 = `delete from ${movies} where id = ${id}`
        db.query(sql1, (err1, result1) => {
            if (err1) throw err1
            db.query(sql2, (err2, result2) => {
                if (err2) throw err2
                res.send(result2)
            })
        })
    }
}