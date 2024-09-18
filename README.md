# BookStream Setup Guide

This guide will walk you through setting up the backend server for the BookStream application. The backend features a clean and responsive interface, advanced search functionality, and secure payment processing.

## Step 1: Environment Variables Setup

1. In the `backend` folder of your project, create a new file named `.env`
2. Inside the `.env` file, add the following environment variables:

   ```bash
   PORT=3000
   MONGO_URI=<your_mongodb_uri> #pass a mongodb url
   JWT_SECRET=<your_jwt_secret> #secret1
   ```

   Replace `<your_mongodb_uri>` with your MongoDB connection string and `<your_jwt_secret>` with a secure JWT secret key.

## Step 2: Start the Server

To start the backend server, follow these steps:

1. Open a terminal and navigate to the `backend` folder of the project:

   ```bash
   cd backend
   ```

2. Establish the database connection by running:

   ```bash
   node conn.js
   ```

3. Once the connection is successful, start the server with the following command:

   ```bash
   node index.js
   ```

This will start the server on the port specified in your `.env` file (default is 3000).

---

With these steps, the backend server for BookStream will be up and running! You can now test the application's functionality or continue development.
