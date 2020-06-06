const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/myDB';

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  return console.log("Connection DB established");
}).catch(err => {
  return console.log(err);
});