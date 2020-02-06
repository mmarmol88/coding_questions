const express = require('express');
const questionsController = require('./controllers/questions');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.use('/questions', questionsController);

app.listen(4000, () => {
  console.log('app is listening');
});
