var connection = require('./connection');

const orm = {
    selectAll: function (tableInput, serverFunc) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            serverFunc(result);
        });
    },
    insertOne: function (table, cols, vals, serverFunc) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            serverFunc(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (table, objColVals, condition, serverFunc) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            serverFunc(result);
        });
    },
};


module.exports = orm;