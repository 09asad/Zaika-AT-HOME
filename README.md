# 🍔 Zaika AT HOME

A modern food ordering and restaurant browsing web application inspired by **Swiggy**, built using **React, Vite, Redux Toolkit, Tailwind CSS, and Express.js**.

The application displays live restaurant and menu data through a custom **Express backend proxy**, eliminating browser CORS issues and making the application production-ready.

---

# 🚀 Live Demo

### 🌐 Frontend
https://zaika-at-home.vercel.app

### ⚙️ Backend API
https://zaika-at-home.onrender.com

---

# ✨ Features

- 🍽️ Browse live restaurants
- 🔍 Search restaurants by name
- ⭐ Filter top-rated restaurants
- 📜 View restaurant menus
- 🛒 Add and remove food items from the cart
- ⚡ Shimmer loading effect
- 🌐 Online/Offline detection
- 📱 Fully responsive UI
- 🔄 Live data fetched through an Express backend proxy

---

# 🏗️ Architecture

```text
                 React + Vite (Frontend)
                          │
                          ▼
            Express.js Backend Proxy (Render)
                          │
                          ▼
                  Swiggy Public API
```

The frontend communicates only with the Express backend.

The backend securely fetches data from the Swiggy API using Axios and returns it to the frontend, eliminating browser CORS restrictions.

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite
- React Router DOM
- Redux Toolkit
- React Redux

## Backend

- Node.js
- Express.js
- Axios
- CORS

## Styling

- Tailwind CSS

## Testing

- Jest
- React Testing Library
- Babel

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

# 📂 Folder Structure

```text
ZaikaAtHome/
│
├── backend/
│   └── server.js
│
├── public/
│
├── src/
│   ├── components/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/09asad/Zaika-AT-HOME.git
```

```bash
cd ZaikaAtHome
```

---

## Install Dependencies

```bash
npm install
```

---

## Run the Frontend

```bash
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Run the Backend

```bash
npm start
```

Runs on:

```text
http://localhost:5000
```

---

# 🌐 API Flow

The frontend requests restaurant data from the Express backend:

```http
GET /api/restaurants
```

The Express backend fetches live restaurant data from the Swiggy API using Axios and returns it to the frontend.

---

# 🧪 Running Tests

```bash
npm test
```

---

# 📦 Production Build

```bash
npm run build
```

---

# 🚀 Deployment

### Frontend

Hosted on **Vercel**

### Backend

Hosted on **Render**

---

# 🔮 Future Improvements

- 🔐 User Authentication
- ❤️ Wishlist / Favorites
- 💳 Razorpay Payment Integration
- 📦 Order Tracking
- 🧾 Order History
- 🌙 Dark Mode
- 📍 Location Selection
- 🍱 Category-wise Food Filtering

---

# 👨‍💻 Author

**Asad Khan**

GitHub: https://github.com/09asad

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
