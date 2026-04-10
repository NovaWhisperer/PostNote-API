# PostNote API

A simple Notes backend API built with Node.js, Express, and MongoDB (Mongoose).

This project supports creating, reading, updating, and deleting notes, and was tested using Postman.

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman (for API testing)

## Features

- Create a note
- Fetch all notes
- Update a note title
- Delete a note
- JSON request/response handling
- Environment variable based configuration

## Project Structure

- server.js
- src/db/db.js
- src/models/note.model.js

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas connection string
- Postman (optional, recommended for testing)

## Installation

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

	 npm install

## Environment Variables

Create a .env file in the project root:

MONGODB_URI=your_mongodb_connection_string
PORT=3000

## Run the Project

Start the server:

npm run start

If start script is not available in your local copy, run:

node server.js

Server runs on:

http://localhost:3000

## API Endpoints

### 1) Health Route

- Method: GET
- URL: /

Response:

Notes App Launch Successfully

### 2) Create Note

- Method: POST
- URL: /notes
- Body (JSON):

{
	"title": "My First Note",
	"content": "This is a sample note"
}

Success Response:

{
	"message": "Note created successfully"
}

### 3) Get All Notes

- Method: GET
- URL: /notes

Success Response:

{
	"message": "Notes fetch successfuly",
	"notes": []
}

### 4) Update Note Title

- Method: PATCH
- URL: /notes/:id
- Body (JSON):

{
	"title": "Updated Title"
}

Success Response:

{
	"message": "Note updated successfully"
}

### 5) Delete Note

- Method: DELETE
- URL: /notes/:id

Success Response:

{
	"message": "Note deleted successfully"
}

## Postman Testing

You can create a Postman collection with the 5 routes above and test all CRUD operations.

Recommended setup in Postman:

- Base URL variable: http://localhost:3000
- Use JSON body for POST and PATCH requests
- Save note id from GET response and use it in PATCH/DELETE routes

## MongoDB

This project uses MongoDB Atlas through Mongoose.

- Connection is configured via MONGODB_URI in .env
- Notes are stored in the note collection

## Git Ignore

The repository includes a .gitignore file that ignores:

- node_modules
- .env and other secret env files
- debug log files
- common OS junk files

