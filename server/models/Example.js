const { Schema, model } = require('mongoose');

const exampleSchema = new Schema({
  exampleText: {
    type: String
  }
});

const Example = model('Example', exampleSchema);

module.exports = Example;
