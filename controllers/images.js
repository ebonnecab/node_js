const apod = require('nasa-apod')
const client = new apod.Client({
    apiKey: "MDilPe2E8T8zPdhWjhgPZKGli3AbCdHlLvkMHG1P",
});

client().then(function (body) {
    console.log(body);
});