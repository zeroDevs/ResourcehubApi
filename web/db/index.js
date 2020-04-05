const mongoose = require('mongoose');

const connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_URL,
      { useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true,
        useFindAndModify: false })
      .then((res, err) => {
        if(err) return reject(err);
        resolve();
      });
  });
}

const close = () => {
  return mongoose.connection.close();
}

module.exports = {connect, close};