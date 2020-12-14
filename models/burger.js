const orm = require("../config/orm");

var burger = {
  // test: function (serverFunc) {
  //   console.log("foo");
  //   serverFunc();
  // },
  selectAll: function (serverFunc) {
    orm.selectAll("burgers", function (res) {
      serverFunc(res);
    });
  },
  createOne: function (cols, vals, serverFunc) {
    orm.createOne("burgers", cols, vals, function (res) {
      serverFunc(res);
    });
  },
  updateOne: function (objColVals, condition, serverFunc) {
    orm.update("burgers", objColVals, condition, function (res) {
      serverFunc(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burger;
