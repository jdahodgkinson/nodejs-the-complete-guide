const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('This is the first middleware...');
    next();
});

app.use('/users', (req, res, next) => {
    console.log("This is a second middleware...");
    res.send('Here is a list of users: Jack, Holly, Joe, Seb, Alex');
});

app.use((req, res, next) => {
    console.log("This is a second middleware...");
    res.send('Here is the root page...');
});

app.listen(3000);
