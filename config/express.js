let express = require("express");
let router = require("../routes");
const bodyParser = require("body-parser");

let initApp = () => {
    let app = express();

    app.use(bodyParser.json())
    app.use("/", router)
    return app;
}

module.exports = initApp;