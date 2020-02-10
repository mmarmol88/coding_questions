const express = require('express');
//require the question schema
const Question = require('../db/Question');
//require router
const router = express.Router();

//route that will show all the questions as links to show page route
router.get('/', (req, res) => {
  //find all questions in the collection
  Question.find({})
    .then(questions => {
      res.render('index', { questions });
    })
    .catch(console.error);
});

router.get('/:id', (req, res) => {
  Question.findById(req.params.id).then(details => {
    res.render('show', details);
  });
});

router.post('/', (req, res) => {
  Question.create(req.body)
    .then(ask => {
      res.redirect('/questions');
    })
    .catch(console.error);
});

router.put('/edit/:id', (req, res) => {
  Question.findOneAndUpdate(req.body)
    .then(ask => {
      res.redirect('/edit/{{_id}}');
    })
    .catch(console.error);
});

router.delete('/:id', (req, res) => {
  Question.findOneAndDelete({ _id: req.params.is }).then(() => {
    res.redirect('/questions');
  });
});

module.exports = router;
