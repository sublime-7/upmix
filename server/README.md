# Backend for Mixup Recipe Sharing Site

This repository contains the backend code for the Mixup Recipe Sharing Site built using Node.js, Express, and MongoDB Atlas. It provides a RESTful API for managing user authentication and recipe data.

## Features

- **User Authentication**
  - User registration with password hashing using bcryptjs.
  - User login with JWT-based authentication.
- **Recipes Management**
  - Create, read, update, and delete recipes.
  - Protected routes to ensure only authenticated users can add or modify recipes.
- **Validation**
  - Input validation using express-validator.
- **Security**
  - Secure password storage and JWT token validation.
- **Error Handling**
  - Global error handler for catching server errors.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (via Mongoose)
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **Validation**: express-validator
- **Environment Management**: dotenv

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)
- A MongoDB Atlas account with a configured cluster

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/athulns/backend.git
   cd backend
