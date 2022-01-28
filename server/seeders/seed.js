const db = require('../config/connection');
const { Example } = require('../models');
const exampleSeeds = require('./exampleSeeds.json');

db.once('open', async () => {
  try {
    await Example.deleteMany({});

    await Example.create(exampleSeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
