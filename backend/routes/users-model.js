/***********
 USERS MODEL
 ***********/
const db = require("../data/db_config");

function getUsers() {
  return db("users").returning("*");
}

function getUser(id) {
  db("users").where({ id }).returning("*");
}
