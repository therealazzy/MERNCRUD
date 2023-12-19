# 🛠️ MERN Stack CRUD Application with Authorization [![My Skills](https://skillicons.dev/icons?i=mongodb)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=express)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev)
This is a full-stack web application built using the MERN stack - MongoDB, Express.js, React.js, and Node.js. It includes authentication and authorization functionalities for secure user interaction. 🔒

## Features 🚀

**Express App:** _Utilizes Express.js for server-side application handling._

**Express Router & API Routes:** _Organizes API routes using Express Router for better code structure._

**MongoDB Atlas and Mongoose:** _Integrates MongoDB Atlas as the database and utilizes Mongoose for data modeling._

**Handling Error Responses:** _Implements error handling for robust error responses throughout the application._

**Express Routes & React Routes:** _Defines server-side routes and client-side routes for seamless navigation._

**Hashing Passwords:** _Secures user passwords by hashing before storing them in the database._

**Data Validation:** _Validates input data both on the server and client sides to ensure data integrity._

**JSON Web Tokens (JWT):** _Implements JWT for authentication and generates tokens for authorized access._

**React Contexts:** _Utilizes React Context API for state management across the application._

**API Route Protection:** _Secures API routes to allow access only to authorized users._

**Authorized Requests:** _Ensures only authorized users can perform CRUD operations._

**React Route Protection:** _Implements route protection in React to control access based on user authentication status._

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
