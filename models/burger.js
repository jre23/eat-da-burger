const orm = require("../config/orm.js");

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