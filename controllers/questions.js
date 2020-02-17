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
//show question details
router.get('/:id', (req, res) => {
  Question.findById(req.params.id).then(details => {
    console.log(details);
    res.render('show', details);
  });
});
router.get('/:id/edit', (req, res) => {
  Question.findById(req.params.id).then(ques => {
    res.render('edit', ques);
  });
});
router.put('/:id', (req, res) => {
  const updatedQuestion = {
    question: req.body.question
  };
  Question.findOneAndUpdate(
    {
      _id: req.params.id
    },
    updatedQuestion,
    { new: true }
  ).then(ques => {
    res.redirect('/questions');
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
  Question.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.redirect('/questions');
  });
});

module.exports = router;
