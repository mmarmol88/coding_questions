const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.listen(4000, () => {
    console.log('app is listening');
});