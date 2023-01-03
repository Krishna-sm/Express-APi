const mongoose = require("mongoose");

const connectDB = (uri) => {
  // console.log("connect db");
  mongoose.set('strictQuery', true);
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;