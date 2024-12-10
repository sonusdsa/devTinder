const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//   res.send("Dashbords");
// });

app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello...");
});

app.use("/test", (req, res) => {
  res.send("Hello from the servers");
});

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777...");
});
