const express = require ('express')
const app = express()
const exphbs = require('express-handlebars')

//Index
app.get('/', (req, res) => {
    res.render('images-index', { nasaImages: nasaImages })
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//mock array of data
let nasaImages = [
    {name: "name", location: "location"},
    {name: "name2", location: "location2"}
]

