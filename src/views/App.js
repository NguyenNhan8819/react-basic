import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "../components/mycomponent";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./Nav/Nav";
import React from "react";
import Home from "./Nav/Home";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListToDo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/users" element={<ListUser />} />
            <Route path="/users/:id" element={<DetailUser />} />
          </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
