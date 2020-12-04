const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Sets up the Express app
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));
// handlebars engine
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});