const express = require('express');
const router = express();

const { Users } = require('../models');

router.get('/', (req, res) => {
  Users.find()
    .then((_users) => {
      console.log(_users);

      res.json({
        users: _users.map(({ _id, username }) => ({ _id, username })),
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({ error: err });
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
  const validIdRegEx = new RegExp(/^[a-f\d]{24}$/i);

  if (!validIdRegEx.test(id)) {
    console.error('invalid id');
    return res.json({ error: 'invalid id' });
  }

  Users.findById(id)
    .then((_user) => {
      if (_user === null) {
        console.error('user not found');

        return res.json({ error: 'user not found' });
      }

      console.log(_user);

      res.json({ username: _user.username, _id: _user._id });
    })
    .catch((err) => {
      console.error(err);

      res.json({ error: err });
    });
});

router.get('/:id/logs', (req, res) => {
  const { id } = req.params;
  const { from, to, limit } = req.query;

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
