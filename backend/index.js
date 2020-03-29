const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello Blog Website!",
  });
});

app.get((req, res, next, error) => {
  res.status(500).json({
    message: "Internal server error...",
    error,
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  `***Server listening on port ${port}])`;
});
