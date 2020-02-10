const express = require('express');
//require the question schema
const Answer = require('../db/Answer');
//require router
const router = express.Router();

router.get('/', (req, res) => {
  Answer.find({}).then(answers => res.render('show', { answers }));
});

//add a new answer
// router.post('/', (req, res) => {
//   const newAnswer = req.body;
//   Answer.create(newAnswer).then(answer => {
//     res.redirect('/questions/:id');
//   });
// });

// router.put('/edit/:id', (req, res) => {
//   const updatedAnswer = req.body;
//   Question.findOneAndUpdate(
//     {
//       _id: req.params.id
//     },
//     updatedAnswer,
//     {
//       new: true
//     }
//   )
//     .then(ask => {
//       res.redirect('/:id');
//     })
//     .catch(console.error);
// });

module.exports = router;
