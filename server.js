const path = require('path');
const express = require('express');
const useragent = require('express-useragent');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(useragent.express());

app.get('/', function(req, res) {
  console.log(req.useragent.isDesktop);
  if (req.useragent.isDesktop) {
    res.sendFile(path.resolve(__dirname, 'build/html', 'desktop.html'));
  } else if (req.useragent.isiPhone || req.useragent.isMobile) {
    res.sendFile(path.resolve(__dirname, 'build/html', 'touch.html'));
  }
});

app.use(express.static('build'));

app.listen(PORT);
