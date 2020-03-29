exports.up = function (knex) {
  knex.schema.createSchema("users", (table) => {
    table.increments("id").notNullable().unique();
    table.string("user").notNullable().unique();
  });

  knex.schema.createSchema("posts", (table) => {
    table.increments("id").notNullable().unique();
    table.string("title").notNullable();
    table.string("body");
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("posts");
  knex.schema.dropTableIfExists("users");
};
