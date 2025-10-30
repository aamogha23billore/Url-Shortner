🔗 URL Shortener Web Application

A full-stack URL Shortener built using Node.js, Express, MongoDB, and EJS, featuring JWT-based authentication, role-based authorization, and detailed analytics tracking for shortened URLs.

🚀 Features

🧭 Core Functionality
Shorten long URLs into unique, shareable short links.
Redirect users seamlessly from short URLs to original destinations.
Track analytics for each URL — including total clicks and visit logs.

🔒 Security & Authentication
JWT (JSON Web Token) based stateless authentication for users.
Role-based authorization ensuring only admins can view all analytics.
Passwords are hashed and stored securely using bcrypt.

⚙️ Backend Architecture

RESTful API endpoints for:
POST /api/url → Create new short URLs.
GET /:shortId → Redirect to the original link.
GET /api/url/:id/analytics → View analytics for a specific URL.
Built with Express.js and Mongoose ODM for database modeling.

💾 Database Design
MongoDB used as the primary database.
Two main schemas:
User → handles authentication, roles, and URL ownership.
URL → stores original URLs, shortened IDs, and analytics info (click count, timestamps).

🖥️ Frontend Interface

Dynamic pages using EJS templates.
Responsive, minimal design styled with CSS.
Logged-in users can:
Manage their URLs.
View statistics for each link.

🧰 Tech Stack
Layer	Technology
Frontend	EJS, CSS, JavaScript
Backend	Node.js, Express.js
Database	MongoDB (with Mongoose ODM)
Authentication	JWT (JSON Web Tokens), bcrypt
Environment	dotenv for configuration

🛠️ Installation & Setup

Follow these steps to run the project locally 👇

1️⃣ Clone the Repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables
Create a .env file in the root directory and add:
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Start the Server
npm start

Then open:
👉 http://localhost:3000

📊 Example Workflow

Sign up or Log in.
Enter a long URL (e.g., https://example.com/my-very-long-link).
Receive a short URL (e.g., http://localhost:3000/abc123).

Track click count and access analytics dashboard.

📦 Folder Structure
url-shortener/
├── models/
│   ├── userModel.js
│   └── urlModel.js
├── routes/
│   ├── authRoutes.js
│   ├── urlRoutes.js
├── controllers/
│   ├── authController.js
│   └── urlController.js
├── views/
│   ├── index.ejs
│   ├── dashboard.ejs
│   └── login.ejs
├── public/
│   └── styles.css
├── .env
├── app.js
├── package.json
└── README.md

🧩 Future Improvements

Add QR code generation for shortened URLs.
Implement email verification and password reset.
Include advanced analytics (geolocation, browser info).
Deploy on Render, Vercel, or AWS.
