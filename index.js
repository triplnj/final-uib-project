const express = require("express");
const app = express();
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', function(request,response) {
response.sendFile(path.join(__dirname, 'public/html/index.html'));

});

app.listen(8000);