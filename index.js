const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function indexCB(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', function aboutCB(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact-me', function contactMeCB(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'contact-me.html'));
});

app.use(function notFoundCB(req, res) {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen('8080', function listenCB() {
  console.log('Server is running on port 8080');
});
