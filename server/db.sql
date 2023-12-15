CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username text NOT NULL UNIQUE,
  password text NOT NULL
  );