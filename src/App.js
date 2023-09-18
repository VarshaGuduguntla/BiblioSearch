import React from "react";
import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/addbook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          {isLoggedIn && <Route path="/user" element={<Welcome />} />}{" "}
          <Route path="/user" element={<Welcome />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
