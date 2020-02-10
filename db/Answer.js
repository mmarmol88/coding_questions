const mongoose = require('./connection');
const AnswerSchema = new mongoose.Schema({
  answer: [String],
  relationship: [
    {
      ref: 'Question',
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;
