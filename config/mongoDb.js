const mongoose = require('mongoose');

const MONGO_URI = process.env['MONGO_URI'];

const connectToDB = () => {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('Mongo DB connected Successfully'))
    .catch((err) => console.error('Error connecting Mongo DB', err));
};

module.exports = connectToDB;
