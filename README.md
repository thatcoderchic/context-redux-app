# State Management Application using Context API & Redux Pattern

## 📌 Project Overview

This project demonstrates **modern state management techniques in React** by combining **Context API** and a **Redux-style state management pattern** to build a scalable, role-based application.

The application focuses on:
- Authentication management using Context API
- Product and cart state management using Redux principles
- Role-based access control (Admin vs Normal User)
- Clean separation of concerns between global UI state and business logic

This project is designed to meet **academic requirements** while also following **industry best practices**.

---

## 🎯 Objectives

- To understand and implement **Context API** for global authentication state
- To manage complex application data using **Redux principles**
- To demonstrate **role-based UI rendering**
- To build a maintainable and scalable React application
- To apply theoretical concepts of state management in a practical project

---

## 🛠️ Technologies & Tools Used

### Frontend
- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

### State Management
- **React Context API** – Authentication & user session
- **Redux-style architecture** using:
  - `useReducer`
  - Actions & reducers
  - Centralized state updates

### Development Tools
- **VS Code**
- **Git & GitHub**
- **Netlify (Deployment)**

---

## 🧩 Application Architecture

The application follows a **hybrid state management approach**:

### 1️⃣ Context API (Authentication Layer)
Used for:
- Login / Logout
- User session management
- Role handling (Admin / User)
- Token handling

### 2️⃣ Redux Pattern (Business Logic Layer)
Used for:
- Product catalog management
- Shopping cart state
- Predictable and scalable state updates

This separation ensures:
- Minimal re-renders
- Clean code structure
- Easy debugging and extension

---

## 🔐 Authentication Module (Context API)

### Managed State:
- `isLoggedIn`
- `userName`
- `role`
- `token`

### Functions:
- `login()` – Authenticates user and sets global state
- `logout()` – Clears authentication state

### Why Context API?
- Lightweight
- Ideal for global UI-related state
- Eliminates prop drilling
- Easy to maintain

---

## 📦 Product Management Module (Redux Pattern)

### Product Features:
- Add product
- Update product
- Remove product
- Display product list

### Cart Features:
- Add item to cart
- Update item quantity
- Remove item
- Clear cart

### Why Redux Pattern?
- Predictable state changes
- Centralized business logic
- Scalable for large applications
- Clear action-based updates

---

## 👥 Role-Based Access Control

### Admin User
- Add new products
- Update existing products
- Delete products
- Full product management access

### Normal User
- View products
- Add products to cart
- Manage cart items

This is implemented using **conditional rendering** based on the role stored in `AuthContext`.

---

## 🖥️ User Interface Highlights

- Clean and responsive UI
- Gradient-based modern design
- Card-style layout
- User-friendly login screen
- Role-specific dashboard behavior

---

## 🗂️ Project Folder Structure

