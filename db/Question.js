const mongoose = require('./connection');

const QuestionSchema = new mongoose.Schema({
  title: String,
  question: String,
  answers: [String]
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
