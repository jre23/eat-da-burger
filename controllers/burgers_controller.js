// require dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
// create routes for get, post, and put
// get root route
router.get("/", (req, res) => {
    burger.selectAll(data => {
        // this for loop assigns the value in the devoured column to true (1) or false (0). the true/false is then used as a condition in index.handlebars for if/unless statements
        for (let i = 0; i < data.length; i++) {
            if (data[i].devoured === 1) {
                data[i].devoured = true;
            } else {
                data[i].devoured = false;
            }
        }
        res.render("index", {
            burgers: data
        });
    })
});
// post route
router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, result => {
        res.json({
            id: result.insertId
        });
    });
});
// put route
router.put("/api/burgers/:id", (req, res) => {
    burger.updateOne(req.body.devoured, req.params.id, result => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so return status 404
            return res.status(404).end();
        }
        // else it has succeeded
        res.status(200).end();
    });
});

module.exports = router;