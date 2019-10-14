var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// var cors = require('cors')
const port = process.env.PORT || 8787
app.use(bodyParser.json())

const { 
    moviesRouter,
    categoriesRouter,
    movcatRouter
} = require('./2.router');

app.use('/movies', moviesRouter);
app.use('/categories',categoriesRouter);
app.use('/movcat', movcatRouter)

app.get('/', (req,res) => {
    res.send('<center><h1>Ini Home Page</h1></center>')
})

app.listen(port, () => console.log('Mendengarkan dalam port : ' + port))