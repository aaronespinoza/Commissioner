const { Schema, model } = require('mongoose');

const profileSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  myTeam: {
  
    type: String,
    trim: true,
  },
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
