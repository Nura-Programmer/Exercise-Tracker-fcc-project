const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// Error handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;

  next(error);
});

// Error route
app.use((err, req, res, next) => {
   res.status(err.status || 500).json({
    message: err.message,
  });
});

app.listen(PORT, () => `Server listening on port ${PORT}`);