const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const router = express.Router();

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root = {
  message: () => "Hello World",
};

// Create an express server and a GraphQl endpoint
router.use(
  "/graphql",
  express_graphql({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

graphql(
  schema,
  `
    {
      message
    }
  `,
  root
).then((res) => {
  console.log(res);
});

module.exports = router;
