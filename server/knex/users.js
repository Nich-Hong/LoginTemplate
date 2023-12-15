const knex = require("./knex");

function createUser(user) {
  return knex("users").insert(user);
}

function authorizeUser(username, password) {
  return knex("users")
    .select("*")
    .where("username", username)
    .andWhere("password", password);
}
