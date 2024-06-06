'use strict';
const express = require('express');
const csrf = require('csurf');

const app = express();
const csurfProtect = csrf({ cookie: true });

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

/** GET /
 *
 * Returns html page
 *
 **/
app.get('/', csurfProtect, function (req, res, next) {
  res.render('index.ejs', { token: req.csrfToken(), sent: null });
});
