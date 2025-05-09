
---

## 🚀 Features

- User registration with hashed password
- JWT-based login (token stored in cookies)
- Logout by clearing cookie
- Create activity
- Assign activity to user
- Get all activities
- Fetch activities assigned to a user
- Request validation with **Joi**

---

## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- cookie-parser
- cors
- Joi for validation
- dotenv

---

## 📦 Activity



---


All routes below are prefixed with `/activity`.

---

## 🧪 1. Create Activity

### ➤ `POST /activity/createactivity`

Creates a new activity in the system.

### ✅ Request Body:

```json
{
  "Title": "Yoga Class",
  "Description": "A relaxing yoga session.",
  "Location": "Wellness Center"
}


## 🧪 2. Get All Activities

### ➤ `GET /activity/getallactivity`

Fetches **all activities** that have been created in the database.

---

### ✅ Sample Request:

No body is required for this request.

---

### 🟢 Sample Success Response:

```json
[
  {
    "_id": "663c67fc33d0a8a6c1c2f412",
    "Title": "Yoga Class",
    "Description": "A relaxing yoga session.",
    "Location": "Community Center",
    "createdAt": "2025-05-08T10:00:00.000Z",
    "updatedAt": "2025-05-08T10:00:00.000Z",
    "__v": 0
  },
  {
    "_id": "663c681233d0a8a6c1c2f415",
    "Title": "Coding Bootcamp",
    "Description": "An intensive JavaScript training",
    "Location": "Tech Hall",
    "createdAt": "2025-05-08T10:05:00.000Z",
    "updatedAt": "2025-05-08T10:05:00.000Z",
    "__v": 0
  }
]


## ➕ 3. Add Activity to a User

### ➤ `POST /activity/addactivity`

This endpoint links an existing activity to a specific user.

---

### 📦 Request Body:

```json
{
  "Userid": "663d75f7fbe79d73049f27e4",
  "Activityid": "663c67fc33d0a8a6c1c2f412"
}



## 👤 4. Register User

### ➤ `POST /user/register`

This endpoint is used to register a new user in the system. It validates input data using Joi, checks for existing users, hashes the password using bcrypt, and stores the user in MongoDB.

---

### 📦 Request Body:

```json
{
  "Name": "John Doe",
  "Email": "john@example.com",
  "Password": "strongpassword123",
  "Phone": 9876543210
}


## 🔐 5. Login User

### ➤ `GET /user/login`

This endpoint is used to log in an existing user by verifying their email and password. If the credentials match, a JWT token is generated and set in an HTTP-only cookie.

---

### 📦 Request Body:

> ❗ Although the route is `GET`, it expects data in the request **body**, which is non-standard. Normally, login should be a `POST` request. Consider changing it to `POST`.

```json
{
  "Email": "john@example.com",
  "Password": "strongpassword123"
}


## 🔓 6. Logout User

### ➤ `GET /user/logout`

This endpoint is used to log out the currently authenticated user by clearing the authentication cookie (`token`). It effectively invalidates the user's session on the client.

---

### 📦 Request:

- **Method**: `GET`
- **Authentication**: Requires user to have a valid session cookie named `token`.

> No request body or parameters are needed.

---

### ✅ Sample Success Response:

```json
{
  "message": "logged out successfully."
}


## 📋 7. Get User Activity

### ➤ `GET /user/getuseractivity`

This endpoint retrieves all activities associated with a specific user. It uses the `Userid` provided in the request body to fetch the user's document and populate the `Activity` field with full activity details.

---

### 📦 Request:

- **Method**: `GET`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "Userid": "USER_OBJECT_ID"
}


```json
{
[
  {
    "_id": "ACTIVITY_ID_1",
    "Title": "Hiking",
    "Description": "Mountain hiking event",
    "Location": "Shimla",
    "createdAt": "2024-05-08T08:30:00.000Z",
    "updatedAt": "2024-05-08T08:30:00.000Z",
    "__v": 0
  },
  {
    "_id": "ACTIVITY_ID_2",
    "Title": "Coding Bootcamp",
    "Description": "Full-stack development training",
    "Location": "Delhi",
    "createdAt": "2024-05-01T11:00:00.000Z",
    "updatedAt": "2024-05-01T11:00:00.000Z",
    "__v": 0
  }
]
}







