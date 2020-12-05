const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// create routes for get, post, and put
router.get("/", (req, res) => {
    burger.selectAll(data => {
        res.render("index", {
            burgers: data
        });
        console.log(data);
        console.log("test data from get route");
    })


});

router.post("/api/burgers", (req, res) => {



});

router.put("/api/burgers/:id", (req, res) => {



});

module.exports = router;