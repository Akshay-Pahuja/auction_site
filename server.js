let express = require("./config/express.js");

let app = express();

app.listen("3000", () => {
  console.log("serve started on port 3000");
});
