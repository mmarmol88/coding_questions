//must require the schema in order to model the data
const mongoose = require('./connection');
const Question = require('./Question');
const Answer = require('./Answer');

//must require the seedData from seeds.json
const seedsData = require('../db/seeds.json');
//clear the database before seeding the data to the collection

Question.deleteMany({}).then(() => {
  console.log('deleted all questions');
  Answer.deleteMany({}).then(() => {
    console.log('deleted all answers');

    Question.create({
      title: 'React',
      question: 'How do I set-state using react?'
    }).then(ques => {
      Answer.create({
        answer: [
          'using react hooks you can useState();',
          'sorry buddy I do not know the answer, but good luck'
        ],
        relationship: ques.id
      })
        .then(ans => {
          ques.relationshiped.push(ans);
          ques.save();
          console.log('created question/answer relationship');
        })
        .catch(console.error);
      process.exit();
    });

    // Question.create({
    //   title: 'HTML',
    //   question: 'What does HTML stand for?'
    // }).then(ques => {
    //   Answer.create({
    //     answer: ['Hyperlink Text Markup Language'],
    //     relationship: ques.id
    //   })
    //     .then(ans => {
    //       ans.relationshiped.push(ans);
    //       ques.save();
    //       console.log('created question/answer relationship');
    //     })
    //     .catch(console.error);
  });
});
// });

//   Question.create(seedsData, (err, seedsData) => {
//     if (err) {
//       console.error;
//     }
//     console.log('seedData created succesfully');
//     mongoose.connection.close();
//   });
// });
