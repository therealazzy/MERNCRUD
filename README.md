# 🛠️ MERN Stack CRUD Application with Authorization [![My Skills](https://skillicons.dev/icons?i=mongodb)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=express)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev)
This is a full-stack web application built using the MERN stack - MongoDB, Express.js, React.js, and Node.js. It includes authentication and authorization functionalities for secure user interaction. 🔒

## Features 🚀

**Express App:** Utilizes Express.js for server-side application handling.

**Express Router & API Routes:** Organizes API routes using Express Router for better code structure.

**MongoDB Atlas and Mongoose:** Integrates MongoDB Atlas as the database and utilizes Mongoose for data modeling.

**Handling Error Responses:** Implements error handling for robust error responses throughout the application.

**Express Routes & React Routes:** Defines server-side routes and client-side routes for seamless navigation.

**Hashing Passwords:** Secures user passwords by hashing before storing them in the database.

**Data Validation:** Validates input data both on the server and client sides to ensure data integrity.

**JSON Web Tokens (JWT):** Implements JWT for authentication and generates tokens for authorized access.

**React Contexts:** Utilizes React Context API for state management across the application.

**API Route Protection:** Secures API routes to allow access only to authorized users.

**Authorized Requests:** Ensures only authorized users can perform CRUD operations.

**React Route Protection:** Implements route protection in React to control access based on user authentication status.

# Technologies Used 💻

[![My Skills](https://skillicons.dev/icons?i=mongodb)](https://skillicons.dev) **MongoDB:** NoSQL database for data storage. <br />
[![My Skills](https://skillicons.dev/icons?i=express)](https://skillicons.dev) **Express.js:** Web application framework for Node.js.<br />
[![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev)**React.js:** Front-end library for building user interfaces.<br />
[![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev)**Node.js:** JavaScript runtime environment.<br />
[![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev)**Mongoose:** Elegant MongoDB object modeling for Node.js.<br />
[![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev)**JSON Web Tokens (JWT):** Securely transmitting information between parties as a JSON object.<br />

## Setup Instructions 📋

Set up MongoDB Atlas and obtain the connection URI.
Create a .env file in the server directory and add:

`MONGODB_URI=YOUR_MONGODB_URI_HERE`<br />
`JWT_SECRET=WT_SECRET_KEY`



# Run the application:


### Run the server
`cd Server
npm start`

### Run the client (in a separate terminal window)
`cd front
npm start`

Access the application at http://localhost:3000 in your web browser.

## License 📝
<sub>This project is licensed under the MIT License.</sub>
