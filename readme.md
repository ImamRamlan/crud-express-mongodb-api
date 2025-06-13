# 📦 CRUD Express + MongoDB + Vite React

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)

A simple fullstack project using **Express.js** and **MongoDB** for the backend, and **React + Vite** for the frontend.

🌐 **Live Demo**: [crud-express-mongodb-api-production.up.railway.app](https://crud-express-mongodb-api-production.up.railway.app)

## ✨ Features

- Complete CRUD operations for items
- RESTful API backend with Express
- MongoDB database with Mongoose ODM
- Modern frontend with React (Vite)
- Client-side routing with React Router
- Responsive UI (Chakra UI/Tailwind CSS if applicable)

## 🛠️ Tech Stack

### Frontend
=======
- CRUD data item
- Backend API dengan Express
- Database MongoDB menggunakan Mongoose
- Frontend modern dengan React (Vite)
- Routing dengan React Router
- UI responsif (Chakra UI)

- React 18
- Vite
- React Router
- Chakra UI / Tailwind CSS (optional)

### Backend

- Express.js
- Mongoose
- CORS middleware

### Database

- MongoDB Atlas

### DevOps

- Railway (deployment)
- dotenv (environment variables)

## 🚀 Getting Started

### Prerequisites

- Node.js ≥16.x
- MongoDB Atlas account or local MongoDB instance
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ImamRamlan/crud-express-mongodb-api.git
   cd crud-express-mongodb-api
   ```
2. Create .env file in root directory:
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
3. Install dependencies and build:
   npm run build

### Running in Production Mode

npm run start

### 📡 API Endpoints

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/api/products`    | Retrieve all items |
| POST   | `/api/products`    | Add new item       |
| PUT    | `/api/product/:id` | Update item        |
| DELETE | `/api/product/:id` | Delete item        |

### 📖 Learning Resources

This project was developed as part of my learning journey from the following course:

Course: [MERN CRASH Course - Full Stack Project & Deployment - Build a Product Store]

Instructor: [Burak Orkmez]

Platform: [Udemy]

Link: [https://www.udemy.com/course/the-web-dev-bootcamp/]

### 📝 Notes

This code represents my personal adaptation and learning process based on the course materials. The implementation may differ from the original course content as I've customized it for my learning purposes.

### 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

### 📄 License

This project is open-source and available under the MIT License.

Key improvements made:

1. Added React badge for completeness
2. Organized technologies into clear categories
3. Added prerequisites section
4. Improved installation instructions formatting
5. Added license section (you should add a LICENSE file)
6. Added contributing section
7. Made the learning resources section more detailed
8. Improved overall English phrasing and consistency
9. Added proper spacing between sections for better readability
10. Made the notes section more specific about the adaptation process
