const express = require('express');
const router = express();

router.get('/', (req, res) => {
  res.json({
    users: ['list of users'],
  });
});

router.post('/', (req, res) => {
  res.json({
    username: req.body.username,
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
