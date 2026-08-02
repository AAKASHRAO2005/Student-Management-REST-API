# 🎓 Student Management API

A simple RESTful API built with **Node.js** and **Express.js** for managing student records. This project demonstrates backend development fundamentals including CRUD operations, routing, request handling, and data validation.

> 🚀 Developed as **Project 2** during the **DecodeLabs Full Stack Development Industrial Training (2026)**.

---

## 📌 Features

- 📋 Get all students
- 🔍 Get a student by ID
- ➕ Add a new student
- ✏️ Update student details
- ❌ Delete a student
- ✅ Input validation
- 🌐 RESTful API design
- 📦 JSON request & response handling
- ⚡ Proper HTTP status codes

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- CORS
- Nodemon

---

## 📂 Project Structure

```
student-management-api/
│
├── controllers/
│   └── studentController.js
│
├── data/
│   └── students.js
│
├── routes/
│   └── studentRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/AAKASHRAO2005/DecodeLabs.git
```

### Navigate to the project

```bash
cd DecodeLabs/Project2/student-management-api
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The server will start on:

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Get All Students

```
GET /api/students
```

---

## Get Student by ID

```
GET /api/students/:id
```

---

## Add New Student

```
POST /api/students
```

### Request Body

```json
{
  "name": "Akash Rao",
  "age": 20,
  "course": "BCA"
}
```

---

## Update Student

```
PUT /api/students/:id
```

---

## Delete Student

```
DELETE /api/students/:id
```

---

# 📷 Example Response

```json
{
  "success": true,
  "message": "Student Added Successfully",
  "student": {
    "id": 3,
    "name": "Akash Rao",
    "age": 20,
    "course": "BCA"
  }
}
```

---

## 🧪 Testing

You can test the API using:

- Postman
- Thunder Client (VS Code)
- Insomnia

---

## 📖 Learning Outcomes

This project helped me understand:

- REST API Development
- Express Routing
- CRUD Operations
- HTTP Methods (GET, POST, PUT, DELETE)
- Request & Response Handling
- Middleware
- Input Validation
- Backend Project Structure

---

## 📌 Future Improvements

- MongoDB Integration
- Mongoose Models
- JWT Authentication
- User Login & Registration
- Password Hashing
- Environment Variables
- Error Handling Middleware
- API Documentation (Swagger)
- Deployment on Render/Railway

---

## 👨‍💻 Author

**A Akash Rao**

- GitHub: https://github.com/AAKASHRAO2005
- LinkedIn: https://www.linkedin.com/in/a-akash-rao-a57586324/

---

## 📄 License

This project is developed for educational and internship purposes under the DecodeLabs Full Stack Development Program.