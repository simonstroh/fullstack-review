const express = require('express');
const database = require('../database/index')
var parser = require('body-parser')
var github = require('../helpers/github')
let app = express();
app.use(parser.text())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(req.body, function(err, res, data) {
    if (err) console.log(err)
    JSON.parse(data).forEach(item => {
      database.save(item)
    })
  })
  res.end("Posted!")
});

app.get('/repos', function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  database.repo.find({}, function(error, repos) {
    if (error) console.log(error)
    res.end(JSON.stringify(repos))
  }).sort({created_at: 'desc'})
});

let port = 1128;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
