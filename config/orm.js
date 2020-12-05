const connection = require("./connection.js");

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: (tableInput, colName, newVal, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, colName, newVal], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    updateOne: (tableInput, colName, newVal, colName2, identifier, cb) => {
        const queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [tableInput, colName, newVal, colName2, identifier], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;