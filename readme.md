# PostNote API

REST API for creating and managing notes with Node.js, Express, and MongoDB Atlas.

Built as a clean backend practice project with full CRUD routes and tested using Postman.

## Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## What This API Does

- Create notes
- Fetch all notes
- Update note title
- Delete notes
- Parse JSON request bodies
- Use environment variables for config

## Project Layout

```text
.
|-- server.js
|-- src/
|   |-- db/
|   |   `-- db.js
|   `-- models/
|       `-- note.model.js
|-- .env.example
|-- .gitignore
`-- package.json
```

## Quick Start

1. Install dependencies.

```bash
npm install
```

2. Create your `.env` file from `.env.example`.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

3. Start the server.

```bash
npm run start
```

Server URL: `http://localhost:3000`

## API Reference

Base URL: `http://localhost:3000`

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Health route |
| POST | `/notes` | Create a note |
| GET | `/notes` | Fetch all notes |
| PATCH | `/notes/:id` | Update note title |
| DELETE | `/notes/:id` | Delete a note |

### Create Note

Request body:

```json
{
  "title": "My First Note",
  "content": "This is a sample note"
}
```

Response:

```json
{
  "message": "Note created successfully"
}
```

### Get All Notes

Response:

```json
{
  "message": "Notes fetch successfuly",
  "notes": []
}
```

### Update Note Title

Request body:

```json
{
  "title": "Updated Title"
}
```

Response:

```json
{
  "message": "Note updated successfully"
}
```

### Delete Note

Response:

```json
{
  "message": "Note deleted successfully"
}
```

## Postman

Use Postman to test all routes quickly.

Recommended setup:
- Create a collection named `PostNote API`
- Add a variable: `baseUrl = http://localhost:3000`
- Save a created note ID and reuse it in PATCH and DELETE requests

## MongoDB

- Uses Mongoose to connect to MongoDB Atlas
- Connection string is read from `MONGODB_URI` in `.env`
- Notes are stored in the `note` collection



