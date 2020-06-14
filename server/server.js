const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static path for CSS files
app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  const html = path.resolve(__dirname, '../dist/main.js')
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'An error occured in unknown middleware',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errObj = { ...defaultErr, ...err };
  console.log(errObj.log);
  res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;