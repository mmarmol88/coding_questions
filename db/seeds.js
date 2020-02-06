//must require the schema in order to model the data
const Question = require('./schema');

//must require the seeddata from seeds.json
const seedData = require('./seeds.json');
//clear the database before seeding the data to the collection
Question.remove({})
  .then(() => Question.collection.insert(seedData))
  .then(() => {
    process.exit();
  });
