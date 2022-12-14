const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

const PORT = 3000;

let app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

app.get('/', (req,res) => {
    res.render('calculate');
});

app.listen(PORT, () => console.log("Server running"));