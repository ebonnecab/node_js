module.exports = function(app, Image) {
    //Index
    app.get('/', (req, res) => {
        Image.find()
            .then(images => {
                res.render('images-index', {images: images});
            })
            .catch(err => {
                console.log(err);
            });
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

