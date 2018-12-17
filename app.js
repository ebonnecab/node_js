const express = require ('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

//Index
app.get('/', (req, res) => {
    res.render('images-index', { nasaImages: nasaImages })
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb:localhost/nasa-images');
//mock array of data
let nasaImages = [
    {date: "YYYY-MM-DD", name: "name"},
    { date: "YYYY-MM-DD", name: "name"}
]

