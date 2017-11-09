const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri()', function() {
  // we're connected!
  
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  html: String,
  owner: String,
  description: String,
  stargazer: Number
  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (obj) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  
    var record = new Repo({
      name: obj.name,
      html: obj.html_url,
      owner: obj.owner.login,
      description: obj.description,
      stargazer: obj.size
     })
    console.log(`added repo ${obj.name} to db`)
    record.save()

}




let get = (callback) => {
  Repo.find({})
  .sort({'stargazer': 'descending'})
  .limit(10)
  .exec(function(err, docs) {
    if (!err) {
      console.log('Sending back data!!!!!!!!!!!!!!!')
      callback(docs);
    } else {
      throw err;
    }
  });
}


module.exports = {
  get: get,
  save: save
}





