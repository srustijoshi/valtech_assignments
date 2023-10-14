const express = require('express');
const fs = require('fs');
const app = express();
const config = require("./config.json");


app.use(express.urlencoded({ extended: true }));

// Load existing superheroes data from a JSON file
let herodata = [];

fs.readFile('superheroes.json', 'utf8', (err, data) => {
    if (!err) {
        herodata = JSON.parse(data);
    }
});

app.get('/', (req, res) => {
    res.render('index.ejs', { superheroes: herodata });
    //res.render('index.pug', { superheroes: herodata });
});

app.post('/save', (req, res) => {
    const newHero = {
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        power: req.body.power,
        city: req.body.city,
    };

    herodata.push(newHero);

    // Save the updated data to the JSON file
    fs.writeFile('superheroes.json', JSON.stringify(herodata), (err) => {
        if (err) {
            console.error('Error saving data:', err);
        }
    });

    res.redirect('/');
});

app.listen(config.port,config.host,error => {
    error
    ? console.log("Error",error)
    : console.log(`server is now live on ${config.host}:${config.port}`)
})
