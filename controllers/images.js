const fetch = require("node-fetch");
const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=MDilPe2E8T8zPdhWjhgPZKGli3AbCdHlLvkMHG1P";
fetch(apodUrl)
    .then(data => {
        return data.json()
    })
    .then(res => {
        console.log(res)
    })
    .catch(error => console.log(error))

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

