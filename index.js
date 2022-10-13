const express = require("express");
const app = express();
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'docs')));
app.get('/', function(request,response) {
response.sendFile(path.join(__dirname, 'docs/html/index.html'));

});

app.listen(8000);
console.log("Listens on localhost:8000");