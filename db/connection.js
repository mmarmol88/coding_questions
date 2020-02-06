const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/question', {
    useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

module.exports = mongoose;