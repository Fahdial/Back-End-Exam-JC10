const db = require('../database');
const categories = 'categories'
const movcat = 'movcat'

module.exports = {
    getListCategories: (req, res) => {
        let sql = `select * from ${categories}`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    addCategories: (req, res) => {
        let { nama } = req.body
        let sql = `insert into ${categories} values (0, '${nama}')`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    editCategories: (req, res) => {
        let { id, nama } = req.body
        let sql = `update ${categories} set nama = '${nama}' where id = ${id}`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    deleteCategories: (req, res) => {
        let { id } = req.body
        let sql1 = `delete from ${movcat} where idCategory = (select c.id from ${categories} c where c.id = ${id})`
        let sql2 = `delete from ${categories} where id = ${id}`
        db.query(sql1, (err1, result1) => {
            if (err1) throw err1
            db.query(sql2, (err2, result2) => {
                if (err2) throw err2
                res.send(result2)
            })
        })
    }
}