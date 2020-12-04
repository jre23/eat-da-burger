const orm = require("../config/orm.js");

const burger = {
    selectAll: cb => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    insertOne: (colName, cb) => {
        orm.insertOne("burgers", colName, res => {
            cb(res);
        });
    },
    updateOne: (colName, newVal, oldVal, cb) => {
        orm.updateOne("burgers", colName, newVal, oldVal, res => {
            cb(res);
        });
    }
}

module.exports(burger);