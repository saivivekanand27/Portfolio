# 🚀 Vivek's MERN Portfolio

A full-stack portfolio website built using the MERN stack with a working contact form and real-time email notification system.

---

## 🔥 Live Features

- Modern responsive UI
- Animated sections
- Projects showcase
- Skills section
- Contact form with backend integration
- Email notification when someone submits the form
- Auto-reply email to users

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- CSS
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer

---

## 📂 Project Structure

```
portfolio/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── Routes/
│   └── server.js
│
├── frontend/
│   ├── src/components/
│   └── App.jsx
│
└── README.md
```

---

## 📧 Contact Feature

When a user submits the contact form:
- Data is saved in MongoDB
- Email notification is sent to me instantly
- Auto-reply confirmation email is sent to the user

---

## 🚀 How to Run Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/mern-portfolio.git
```

### 2️⃣ Install backend dependencies

```
cd Backend
npm install
```

### 3️⃣ Install frontend dependencies

```
cd frontend
npm install
```

### 4️⃣ Add Environment Variables

Create a `.env` file inside Backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### 5️⃣ Run the project

Backend:
```
npm run dev
```

Frontend:
```
npm run dev
```

---

## 📌 Future Improvements

- Deployment (Render / Vercel)
- Admin dashboard
- Blog section
- Authentication system

---

## 👨‍💻 Author

**Vivek**  
B.Tech CSE | MERN Stack Developer  

---

⭐ If you like this project, give it a star!