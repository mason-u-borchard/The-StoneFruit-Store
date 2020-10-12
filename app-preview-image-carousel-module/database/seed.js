const db = require("./index.js");
var Carousels = require("./model.js");

const imagesData = require("./seed_data.js");

// populate db
// var seedDb = function (data) {
//   Carousels.insertMany(data, (err, docs) => {
//     if (err) {
//       console.log(`Error populating db ${err}`);
//       return;
//     }
//     console.log("Done populating db!");
//   });
// };

const addEntries = function () {
  Carousels.create(imagesData)
    .then(() => {
      console.log("successfully populated img_carousel");
      return db.disconnect();
    })
    .catch((err) => {
      console.log(`Error populating db: ${err}`);
    });
};

addEntries();
module.exports = addEntries;
