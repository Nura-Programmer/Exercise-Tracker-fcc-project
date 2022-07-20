const express = require('express');
const cors = require('cors');
const app = express();

const { homeRoutes, usersRoutes } = require('./routes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/', homeRoutes);
app.use('/api/users', usersRoutes);

// Error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;

  next(error);
});

// Error route
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
