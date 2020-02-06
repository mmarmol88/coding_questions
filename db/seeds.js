//must require the schema in order to model the data
const Question = require('./Question');
const Answer = require('./Answer');

//must require the seedData from seeds.json
const seedsData = require('../db/seeds.json');
//clear the database before seeding the data to the collection
// Question.remove({})
//   .then(() => Question.collection.insert(seedsData))
//   .then(() => {
//     process.exit();
//   });

Question.deleteMany({}).then(() => {
  console.log('deleted all questions');
  Answer.deleteMany({}).then(() => {
    console.log('deleted all answers');

    Question.create({
      title: 'React',
      question: 'How do I set-state using react?'
    }).then(react => {
      Answer.create({
        answer: 'I dont know figure it out',
        relationship: react.id
      }).then(des => {
        react.relationshiped.push(des);
        react.save();
        console.log('created question/answer relationship');
      });
    });
  });
});
