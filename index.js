const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs/promises');

const PORT = 8080;
const server = http
  .createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');

    let fileName;
    switch (req.url) {
      case '/':
        fileName = 'index';
        break;
      case '/about':
        fileName = 'about';
        break;
      case '/contact-me':
        fileName = 'contact-me';
        break;
      default:
        fileName = '404';
    }

    const fullPath = path.join(__dirname, 'views', `${fileName}.html`);
    fs.readFile(fullPath)
      .then(function readSuccess(data) {
        if (fileName === '404') {
          res.statusCode = 404;
        }
        res.end(data);
      })
      .catch(function readError(err) {
        console.log(err);
      });
  })
  .listen(PORT, function listeCB() {
    console.log(`Server is running on port ${PORT}`);
  });
