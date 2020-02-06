const express = require('express');
//require the question schema
const Question = require('../db/schema');
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

router.delete('/:id', (req, res) => {
  Question.findByIdAndRemove({ _id: req.params.is}) 
  .then(() => {
    res.redirect('/questions');
  })
});


module.exports = router;
