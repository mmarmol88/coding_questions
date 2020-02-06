//must require the schema in order to model the data
const Question = require('./schema');

//must require the seedData from seeds.json
const seedsData = require('../db/seeds.json');
//clear the database before seeding the data to the collection
Question.remove({})
  .then(() => Question.collection.insert(seedsData))
  .then(() => {
    process.exit();
  });
