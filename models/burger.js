// require dependencies
const orm = require("../config/orm.js");
// this creates the burger object that holds the functions that call the orm object functions from orm.js. the functions defined here are called in burgers_controller.js
const burger = {
    selectAll: cb => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    insertOne: (colName, newVal, cb) => {
        orm.insertOne("burgers", colName, newVal, res => {
            cb(res);
        });
    },
    updateOne: (newVal, identifier, cb) => {
        orm.updateOne("burgers", "devoured", newVal, "id", identifier, res => {
            cb(res);

        });
    }
}

module.exports = burger;