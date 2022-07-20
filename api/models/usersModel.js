const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  log: [
    {
      description: String,
      duration: Number,
      date: String,
    },
  ],
});

module.exports = mongoose.model('Users', usersSchema);
