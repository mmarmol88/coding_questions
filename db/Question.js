const mongoose = require('./connection');

const QuestionSchema = new mongoose.Schema({
  title: String,
  question: String,
  relationshiped: [
    {
      ref: 'Answer',
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
