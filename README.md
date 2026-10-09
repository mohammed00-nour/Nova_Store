# NOVA STORE 🛍️

### Modern Product Store & Management Dashboard

NOVA STORE is a React-based product management application built to practice modern frontend development, API integration, and server-state management.

## ✨ Features

* **Product Listing:** Fetch and display products from an external API.
* **Product Management:** Add, edit, and delete products.
* **Server-State Management:** Manage API data and caching with TanStack Query.
* **API Integration:** Handle HTTP requests using Axios.
* **Loading & Error States:** Provide feedback during data fetching.
* **Responsive Layout:** Display products in a flexible grid layout.
* **Client-Side Routing:** Navigate between application pages using React Router.

## 🛠️ Tech Stack

* React
* Vite
* JavaScript
* React Router
* TanStack Query (React Query)
* Axios
* CSS

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohammed00-nour/Nova_Store.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Nova_Store
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🏗️ Production Build

To create a production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 API

Product data is fetched from the [DummyJSON Products API](https://dummyjson.com/products).

**Note:** DummyJSON simulates product creation, editing, and deletion. These changes are not permanently saved on the server.

## 📂 Project Structure

```text
src/
├── Pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   └── Manage.jsx
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── services/
│   └── productsApi.jsx
├── App.jsx
└── main.jsx
```

## 🎯 Project Goal

This project was built as a practical exercise in React development, API integration, routing, and server-state management using TanStack Query.

## 👨‍💻 Author

**Mohammad Nour Hogeg**

GitHub: [@mohammed00-nour](https://github.com/mohammed00-nour)
