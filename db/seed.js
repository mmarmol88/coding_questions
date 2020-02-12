//must require the schema in order to model the data
const mongoose = require('./connection');
const Question = require('./Question');

//must require the seedData from seeds.json
const seedsData = require('../db/seeds.json');
//clear the database before seeding the data to the collection

Question.deleteMany({}).then(() => {
  console.log('deleted all questions');
  Question.create(seedsData, (err, seedsData) => {
    if (err) {
      console.error;
    }
    console.log(`seedData created succesfully ${seedData}`);
    mongoose.connection.close();
  });
});
