const db = require('../database');
const categories = 'categories'
const movcat = 'movcat'
const movies = 'movies'

module.exports = {
        getListMoviCategory: (req, res) => {
            let sql = `select m.judul, c.nama from ${movcat} mc join ${movies} m on m.id = mc.idMovie join ${categories} c on c.id = mc.idCategory`
            db.query(sql, (err, result) => {
                if (err) throw err
                res.send(result)
            })
        },
        
        addMoviCategory: (req, res) => {
            let { idMovie, idCategory } = req.body
            let sql = `insert into ${movcat} values ('${idMovie}', '${idCategory}')`
            db.query(sql, (err, result) => {
                if (err) throw err
                res.send(result)
            })
        },

        deleteMoviCategory: (req, res) => {
            let { idMovie, idCategory } = req.body
            let sql = `delete from ${movcat} where idMovie = ${idMovie} and idCategory = ${idCategory}`
            db.query(sql, (err, result) => {
                if (err) throw err
                res.send(result)
            })
        },
    

}