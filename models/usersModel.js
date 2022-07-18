const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  count: Number,
  log: [
    {
      description: String,
      duration: Number,
      date: Date,
    },
  ],
});

module.exports = mongoose.model('Users', usersSchema);
