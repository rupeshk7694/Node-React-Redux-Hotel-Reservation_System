const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8001;

app.use(express.static('./src/client/assets'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./api/routes')(app);
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, './src/client/index.html'));
});

module.exports = app
