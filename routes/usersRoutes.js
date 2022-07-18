const express = require('express');
const router = express();

const { Users } = require('../models');

router.get('/', (req, res) => {
  res.json({
    users: ['list of users'],
  });
});

router.post('/', (req, res) => {
  const { username } = req.body;

  if (username === undefined || username.length < 3)
    return res.json({ error: 'invalid username' });

  const userObj = {
    username,
    count: 0,
    log: [],
  };

  new Users(userObj)
    .save()
    .then((_user) => {
      console.log(_user);

      res.json({
        username: _user.username,
        _id: _user._id,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({ error: err });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    _id: req.params.id,
  });
});

router.get('/:id/logs', (req, res) => {
  const { id } = req.params;
  const { form, to, limit } = req.query;

  res.json({
    _id: req.params.id,
  });
});

router.get('/:id/exercises', (req, res) => {
  const { id } = req.params;

  res.json({
    _id: req.params.id,
  });
});

router.post('/:id/exercises', (req, res) => {
  const { id } = req.params;

  res.json({
    _id: req.params.id,
  });
});

module.exports = router;
