// require dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./controllers/burgers_controller.js");
// serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// sets up the Express app
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// handlebars engine
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});