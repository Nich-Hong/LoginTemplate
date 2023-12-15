const knex = require("./knex");

function createUser(user) {
  return knex("users").insert({
    username: user["username"],
    password: user["password"],
  });
}

function authorizeUser(username, password) {
  return knex("users")
    .select("*")
    .where("username", username)
    .andWhere("password", password);
}
module.exports = { createUser, authorizeUser };
