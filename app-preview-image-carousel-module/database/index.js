const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/img_carousel";

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = db;
