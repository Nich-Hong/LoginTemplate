const knex = require("knex");
const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "users.db",
  },
});
module.exports = connectedKnex;
