// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data",
    },
  },
  production: {
    client: "postgresql",
    migrations: {
      tableName: "/migrations",
    },
  },
};
