const {
    table
} = require("console");
const connection = require("./connection.js");

const orm = {
    selectAll: (tableInput, cb) => {
        connection.query("SELECT * FROM ??"), [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        }
    },
    insertOne: (tableInput, colName, cb) => {
        connection.query("INSERT INTO burgers (burger_name) VALUES ??", [tableInput, colName], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    updateOne: (tableInput, newVal, oldVal, cb) => {
        connection.query("UPDATE ?? SET ?? WHERE ??)", [tableInput, {
            burger_name: newVal
        }, {
            burger_name: oldVal
        }], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports(orm);