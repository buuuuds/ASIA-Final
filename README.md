# 📘 Blog Postings REST API

A simple RESTful API for managing blog posts with full CRUD functionality, JWT-based authentication, and rate limiting. The API is built with Node.js and Express, and uses a relational database (MySQL, PostgreSQL, or MariaDB) for persistent storage. Tested using Postman.


## 📺 Video Instructions

Watch the full demo and testing instructions here:  
🎥 [Click to Watch the Video](https://drive.google.com/drive/u/0/folders/14KClqCKwu0727jxh6sEBLWJnJLr9hNMi)

> The video includes:
> - Registering a user
> - Logging in and receiving a token
> - Creating a blog post
> - Retrieving all posts
> - Getting a single post by ID
> - Updating a post
> - Deleting a post

---

## 🔧 Features

- ✅ Register and login with JWT token generation
- ✅ Create, Read, Update, and Delete blog posts
- ✅ Rate limiting: 100 requests per 2 minutes
- ✅ Input validation and error handling
- ✅ Secure password hashing using bcrypt
- ✅ Tested using Postman with x-www-form-urlencoded format

---

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL / PostgreSQL / MariaDB
- **Security:** JWT, bcryptjs
- **Tools:** Postman, nodemon, dotenv

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/asia-finalproject.git
cd asia-finalproject
