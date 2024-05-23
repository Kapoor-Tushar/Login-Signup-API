# Login-Signup API

Welcome to the Login-Signup API repository! This project is built using Node.js, Express, and MongoDB to provide a simple user authentication system with JWT support along with a proper interface. Below you'll find instructions on how to set up, run, and use the API.

## Introduction

This API provides endpoints for user registration and login, along with EJS-rendered pages for user interaction. It includes basic form handling with Axios on the frontend to communicate with the backend. It also provides validation and encryption for a safer login and signup.

## Features

- User registration and login with JWT authentication
- Error handling for invalid requests
- EJS templates for login and signup pages
- Basic form validation and feedback
- Encrypting password using bcrypt libarary 


## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/login-signup-api.git
    cd login-signup-api
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `config.env` file in the root directory and add the following:

    ```env
    DATABASE=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRES_IN=90d
    ```

4. **Start MongoDB:**
Create an account on MongoDb Atlas and then connect your cluster.


## Usage

### Accessing the App

Open your browser and navigate to:

- **Login Page:** `http://localhost:7000/login`
- **Signup Page:** `http://localhost:7000/signup`

### API Endpoints

#### User Registration
**If You are using Postman to interact with the API.**
- **URL:** `/api/v1/users/signup`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword",
    "passwordConfirm": "yourpassword"
  }

### Screenshots
**Here are some screenshots of the application:**

**Login Page**
<img width="960" alt="ls1" src="https://github.com/Kapoor-Tushar/Login-Signup-API/assets/82567111/f73e8f1a-d79c-487a-a093-5ce7d528c4ff">


**Signup Page**
<img width="960" alt="ls2" src="https://github.com/Kapoor-Tushar/Login-Signup-API/assets/82567111/142b82e8-de7d-4151-95b6-0ed7b3b64771">
