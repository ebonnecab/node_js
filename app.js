const express = require ('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require("mongoose");
const images = require("./controllers/images")(app);

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/nasa-images');

