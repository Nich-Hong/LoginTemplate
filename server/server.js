const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ test: "this works" });
});
app.post("/login", (req, res) => {
  res.json({ message: "Form Submitted" });
});
app.listen(5000, () => {
  console.log("Server running on 5000");
});
