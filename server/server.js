const express = require("express");
const sqlite3 = require("sqlite3");
const db = require("./knex/users");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ test: "this works" });
});
app.post("/signin", async (req, res) => {
  const result = await db.authorizeUser(
    req.body["username"],
    req.body["password"]
  );
  if (result == []) {
    return res.status(404).json({ message: "User Not Found" });
  } else {
    res.json({ message: "Authorized" });
  }
});
app.post("/signup", async (req, res) => {
  const result = await db.createUser(req.body);
  res.json({ message: "Signup Submitted" });
});
app.listen(5000, () => {
  console.log("Server running on 5000");
});
