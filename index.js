const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log("[index.js] Server is up and running on port:", port);
});
