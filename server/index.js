const express = require('express');
var bodyParser = require('body-parser')
const getRepos = require('../helpers/github.js')
const save = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  //API request 
  getRepos.getReposByUsername(req.body.username, function(data) {
    //Input into database 

    JSON.parse(data).map(el => save.save(el))

    res.send(req.body)
  })
  
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

