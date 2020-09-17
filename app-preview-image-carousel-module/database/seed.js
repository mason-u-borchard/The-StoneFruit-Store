const db = require("./index.js");
var Carousels = require("./model.js");
var mongoose = require("mongoose");
const imagesData = require("./seed_data");
mongoose.connect("mongodb://database/img_carousel");

// populate db
var seedDb = function (data) {
  Carousels.insertMany(data, (err, docs) => {
    if (err) {
      console.log(`Error populating db ${err}`);
      return;
    }
    console.log("Done populating db!");
  });
};

const addEntries = function () {
  Carousels.create(imagesData)
    .then(() => {
      console.log("successfully populated img_carousel");
      db.disconnect();
    })
    .catch((err) => {
      console.log(`Error populating db: ${err}`);
    });
};
// seedDb(imagesData);
addEntries();
module.exports = addEntries;
