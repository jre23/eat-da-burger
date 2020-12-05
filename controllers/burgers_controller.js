const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// create routes for get, post, and put
router.get("/", (req, res) => {
    burger.selectAll(data => {
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

router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, result => {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.updateOne(req.body.devoured, req.params.id, result => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;