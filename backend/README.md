# User Management API (Node.js + Express + MongoDB)

This is a simple RESTful API for managing users.  
It is built with **Node.js**, **Express**, and **MongoDB (Mongoose)**, and supports basic CRUD operations.

---

## Features

- Add a new user  
- Fetch all users  
- Fetch a single user by ID  
- Update a user by ID  
- Delete a user by ID  

Each user has the following fields:
- `firstName` (String, Required)
- `lastName` (String, Required)
- `email` (String, Required, Unique)
- `department` (String, Required)

---

## Tech Stack

- **Node.js** (Runtime)  
- **Express.js** (Backend Framework)  
- **MongoDB + Mongoose** (Database & ODM)  
- **dotenv** (Environment Variables)  
- **cors** (CORS Handling)  

---

## Installation & Setup

1. Clone this repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
Install dependencies:

bash
Copy code
npm install
Create a .env file in the project root and add:

env
Copy code
PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>
Start the server:

bash
Copy code
node index.js
or use nodemon:

bash
Copy code
npx nodemon index.js
The server will run on:

arduino
Copy code
http://localhost:5000
API Endpoints
➤ Create a User
POST /users

json
Copy code
{
  "firstName": "Arun",
  "lastName": "Kumar",
  "email": "arun@example.com",
  "department": "Design"
}
➤ Get All Users
GET /users

➤ Get User by ID
GET /users/:id

➤ Update User
PUT /users/:id

json
Copy code
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "department": "Finance"
}
➤ Delete User
DELETE /users/:id

Example Responses
✅ Success:

json
Copy code
{
  "message": "User created successfully",
  "user": {
    "_id": "652e44f9ab1234567890abcd",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "department": "Design"
  }
}



{
  "message": "User already exists"
}
License
This project is open-source and free to use.

