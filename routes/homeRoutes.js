const express = require('express');
const router = express();

router.get('/', (req, res) => {
  res.sendFile('index.html');
});

module.exports = router;
