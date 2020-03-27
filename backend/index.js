const express = require("express");
const app = express();
const server = require("./server");

app.use(express.json());
app.use("/api", server);

const port = 4000;
app.listen(port, () => {
  `*** Server listening on port: ${port} ***`;
});
