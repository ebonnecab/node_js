const express = require ('express')
const app = express()
const exphbs = require('express-handlebars')

//Index
app.get('/', (req, res) => {
    Image.find()
        .then(images => {
            res.render('images-index', {images: images});
        })
        .catch(err => {
            console.log(err);
        })
})

//Show
app.get('/images/:id', (req, res) => {
    Image.findById(req.params.id).then((image) => {
        res.render('images-show', {image: image})
    }).catch((err) => {
        console.log(err.message);
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nasa-images');

//Model
const Image = mongoose.model('Image', {
    name: String,
    date: Date
});

//mock array of data
// let nasaImages = [
//     {date: "YYYY-MM-DD", name: "name"},
//     { date: "YYYY-MM-DD", name: "name"}
// ]

