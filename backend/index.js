const express = require("express");
const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");
const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);

const oidc = new ExpressOIDC({
  issuer: process.env.ISSUER,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  loginRedirectUri: "http://localhost:3000/authorization-code/callback",
  scope: "openid profile",
});

app.use(oidc.router);

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
  `***Server listening on port ${port}***`;
});
