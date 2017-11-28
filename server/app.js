const express = require('express');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
  res.render('index', { title: 'BFF simple starter' });
});

module.exports = app;
