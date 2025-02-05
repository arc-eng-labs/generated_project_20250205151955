# Node.js TODO App with SQLite

This project is a simple Node.js application that manages a list of TODO items stored in a SQLite database. It also provides a basic web-based user interface to view and manage tasks.

## Features
- Add, view, and delete TODO items.
- Stores tasks in a local SQLite database.
- A simple web interface built with HTML, CSS, and JavaScript.

## Project Structure

```
.
├── README.md (this file)
├── package.json
├── server.js
├── db.js
├── public
│   ├── index.html
│   ├── styles.css
│   └── main.js
```

### 1. `README.md`
This documentation file containing project details and instructions.

### 2. `package.json`
Specifies dependencies and project metadata. Used by npm to install and manage required modules.

### 3. `server.js`
The main server file that starts an Express.js server, sets up routes for the TODO API, and serves the static frontend.

### 4. `db.js`
Database configuration using the `sqlite3` package. Automatically creates a table for storing TODO items if it does not exist.

### 5. `public/index.html`
The main HTML file for the web client.

### 6. `public/styles.css`
Basic styles for the web interface.

### 7. `public/main.js`
Handles frontend logic, fetching data from the TODO API, adding and deleting tasks using JavaScript.

## Requirements
- Node.js (>= 14 recommended)
- npm (>= 6 recommended)

## Setup
1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open your browser and go to `http://localhost:3000` to use the application.

## License
This project is provided under the [MIT License](https://opensource.org/licenses/MIT).
