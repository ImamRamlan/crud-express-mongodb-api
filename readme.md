# 📦 CRUD Express + MongoDB + Vite React

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

Project fullstack sederhana menggunakan **Express.js** dan **MongoDB** di backend, serta **React + Vite** di frontend.

🌐 **Demo**: [crud-express-mongodb-api-production.up.railway.app](https://crud-express-mongodb-api-production.up.railway.app)

---

---

## 🚀 Fitur

- CRUD data item
- Backend API dengan Express
- Database MongoDB menggunakan Mongoose
- Frontend modern dengan React (Vite)
- Routing dengan React Router
- UI responsif (Chakra UI)

---

## 🧪 Teknologi

- **Frontend**: React, Vite, Chakra UI (opsional)
- **Backend**: Express.js, Mongoose
- **Database**: MongoDB
- **Environment**: dotenv
- **Dev Tools**: nodemon, cross-env

---

## ⚙️ Instalasi & Setup

1. Clone repo
   ```bash
   git clone https://github.com/ImamRamlan/crud-express-mongodb-api.git
   cd crud-express-mongodb-api
   ```
2. Buat file .env di root:
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
3. Install dependency backend & frontend:
   npm run build

## ▶️ Menjalankan Aplikasi Only Production Mode.

1.  Run app production mode.
    npm run start

## 📬 API Endpoints

| Method | Endpoint           | Deskripsi        |
| ------ | ------------------ | ---------------- |
| GET    | `/api/products`    | Ambil semua item |
| POST   | `/api/products`    | Tambah item      |
| PUT    | `/api/product/:id` | Update item      |
| DELETE | `/api/product/:id` | Hapus item       |

## 📚 Sumber / Referensi

Project ini dibuat sebagai hasil pembelajaran dari course/tutorial berikut:

- Nama Course: **[MERN CRASH Course - Full Stack Project & Deployment - Build a Product Store]**
- Pengajar: **[Burak Orkmez]**
- Platform: **[Udemy]**
- Link: [https://www.udemy.com/course/the-web-dev-bootcamp/]

---

## ⚠️ Catatan

Kode ini adalah hasil adaptasi dan pembelajaran saya pribadi berdasarkan materi course tersebut.
