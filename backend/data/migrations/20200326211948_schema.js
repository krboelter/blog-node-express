exports.up = function (knex) {
  knex.schema.createTable("users", (table) => {
    table.increments("id").notNullable().unique();
    table.string("name").notNullable().unique();
  });

  knex.schema.createTable("posts", (table) => {
    table.increments("id").notNullable().unique();
    table.string("title").notNullable();
    table.string("body").notNullable();
    table
      .string("users_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("posts");
  knex.schema.dropTableIfExists("users");
};
