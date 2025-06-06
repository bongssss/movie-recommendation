# 🎥 Movie Recommendation App

A modern movie recommendation app built with **React**, **Vite**, and the **TMDB API**. The app allows users to view popular movies, search for titles, and manage a list of favorites. It offers a responsive and dynamic user interface that interacts with real-time movie data.

---

## 🚀 Features

* Fetches and displays **popular movies** from TMDB
* **Search** functionality to look up movies by title
* **Favorites** system with local storage persistence
* Clean and responsive UI with movie posters and details
* Built with modern tools like React, Vite, and the Fetch API

---

## 📄 Technologies Used

### 1. **React**

React is a powerful JavaScript library for building user interfaces. In this project, we use:

* **Functional components** with Hooks like `useState`, `useEffect`, and `useContext`
* **Context API** for managing global state (favorites)
* **JSX** for declarative UI structure

### 2. **Vite**

[Vite](https://vitejs.dev/) is a modern frontend build tool that significantly improves the development experience by offering:

* Lightning-fast development server
* Instant hot module replacement (HMR)
* Native ES module support
* Minimal and optimized production builds

### 3. **TMDB API**

[The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api) provides detailed metadata for movies and TV shows. We utilize:

* `/movie/popular` endpoint for trending content
* `/search/movie` endpoint for search functionality

### 4. **Local Storage**

Favorites are stored using the browser's `localStorage`, ensuring persistence across sessions.

---

## 📆 Getting Started

### Prerequisites

* Node.js (v14+ recommended)

### Installation

```bash
git clone https://github.com/yourusername/movie-recommendation-app.git
cd movie-recommendation-app
npm install
```

### Running the App

```bash
npm run dev
```

### Create a `.env` File

Register on [TMDB](https://www.themoviedb.org/) and obtain your API key. Then add it to a `.env` file:

```
VITE_TMDB_API_KEY=your_api_key_here
```

---

## 📂 Project Structure

```
movie-recommendation-app/
├── public/
├── src/
│   ├── components/
│   │   └── MovieCard.jsx
│   ├── contexts/
│   │   └── MovieContext.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── api.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── package.json
└── README.md
```

---

## 💼 License

This project is licensed under the MIT License. See the `LICENSE` file for more info.

---

## 📖 Resources

* [React Documentation](https://reactjs.org/docs/getting-started.html)
* [Vite Documentation](https://vitejs.dev/guide/)
* [TMDB API Docs](https://developers.themoviedb.org/3)

---

## 📸 Screenshots

*Add screenshots here of the home page, search feature, and favorites list.*

---

Made with ❤️ using React, Vite, and the TMDB API.



























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
