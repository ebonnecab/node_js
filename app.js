const express = require ('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require("mongoose");
const Image = mongoose.model("Image", {
  name: String,
  date: Date
});
const images = require('./controllers/images') (app, Image);

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/nasa-images');

