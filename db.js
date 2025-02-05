const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize the database
const dbPath = path.join(__dirname, 'todo.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to open database:', err);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create the todos table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL
  );
`);

module.exports = db;
