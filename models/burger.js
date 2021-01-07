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
  create: function (cols, vals, serverFunc) {
    orm.insertOne("burgers", cols, vals, function (res) {
      serverFunc(res);
    });
  },
  update: function (objColVals, condition, serverFunc) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      serverFunc(res);
    });
  },
  destroy: (condition, serverFunc) => {
    orm.deleteOne("burgers", condition, (res) => {
      serverFunc(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
