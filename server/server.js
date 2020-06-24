const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')

const app = express();

/* Require Route Handlers */

/* Define PORT */
const PORT = process.env.PORT || 3000;

/* Enable Express handlers */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Use cookieParser */
app.use(cookieParser());

/* Serves Static Files */
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(express.static(path.join(__dirname, '../src')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

/* 404 Error Handler */
app.use('*', (req, res) => res.sendStatus(404));

/* Global Error Handling */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const newErrObj = { ...defaultErr, ...err };
  console.log(newErrObj.log);
  res.status(newErrObj.status).json(newErrObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
