# Product Management App

Live: [https://product-management-app-1.netlify.app/](https://product-management-app-1.netlify.app/)  
Backend API: [https://soule-backend-h8dn.onrender.com/](https://soule-backend-h8dn.onrender.com/)

## Overview

This is a full-stack Product Management web application built with React (frontend) and a REST API backend.  
Users can log in, view, add, edit, and delete products. All product management features are protected and require authentication.

---

## Features

- **Authentication:**  
  - Login with email and password.
  - JWT access token is stored in localStorage.
  - If the token expires, the user is prompted to log in again.

- **Protected Dashboard:**  
  - Only logged-in users can access the dashboard and manage products.
  - Logout option is available in the navbar.

- **Product Management:**  
  - View all products in a glassmorphism card layout.
  - Add new products.
  - Edit existing products (inline form).
  - Delete products.
  - All actions show toast notifications (success/error) at the top center.

- **UI/UX:**  
  - Responsive design with Tailwind CSS.
  - Modern glassmorphism style for product cards.
  - React Icons for visual cues.
  - Toast notifications via `react-hot-toast`.
  - Clean login page with password show/hide toggle.

- **Routing:**  
  - React Router v6 for navigation.
  - `/` - Home page (public)
  - `/login` - Login page (public)
  - `/dashboard/products` - Product list (protected)
  - `/dashboard/add-product` - Add product (protected)

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, React Icons, react-hot-toast
- **Backend:** [See API](https://soule-backend-h8dn.onrender.com/)
- **Deployment:** Netlify (frontend), Render (backend)

---

## How It Works

1. **Login:**  
   - Go to `/login`, enter your email and password.
   - On success, you are redirected to the dashboard and your token is saved.

2. **Dashboard:**  
   - View, add, edit, and delete products.
   - All API requests include your token for authentication.
   - If your token expires, you are logged out and prompted to log in again.

3. **Logout:**  
   - Click the "Logout" button in the navbar to clear your token and return to the login page.

---

## Development

- Install dependencies:  
  `npm install`
- Start the app:  
  `npm run dev`
- Make sure your backend is running or use the provided Render API.

---

## Credits

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [react-hot-toast](https://react-hot-toast.com/)
