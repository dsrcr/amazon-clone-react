import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <h1>Checkout</h1>
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <h1>Login</h1>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
