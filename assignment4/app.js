const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index.ejs', {pageTitle: 'Welcome!'});
});

const users = [];

app.post('/users', (req, res) => {
    users.push(req.body.username);
    res.redirect('/users');
});

app.get('/users', (req, res) => {
    res.render('users.ejs', {pageTitle: 'Users', users: users});
});

app.listen(3000);
