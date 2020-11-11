const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/", express.static("public/index.html"));

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
