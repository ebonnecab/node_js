const apod = require('apod-nasa')
apod().then(data => {
    console.log(data);
})
    .catch(err => {
        console.log(err);
    });
module.exports = function(app, apod) {
    //Index
    app.get('/', (req, res) => {
       
    });
    //Show
    app.get('/images/:id', (req, res) => {
        Image.findById(req.params.id).then((image) => {
            res.render('images-show', { image: image })
        }).catch((err) => {
            console.log(err.message);
        })
    });
}

