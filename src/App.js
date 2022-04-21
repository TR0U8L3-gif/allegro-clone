import React from "react";
import {BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./sites/Nav";
import Home from "./sites/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/watched" element={
            <>
              <h1>Watched</h1>
            </>
          }/>
          <Route path="/cart" element={
            <>
              <h1>Cart</h1>
            </>
          }/>
          <Route path="/checkout" element={
            <>
              <h1>Checkout</h1>
            </>
          }/>
          <Route path="/login" element={
            <>
              <h1>Login</h1>
            </>
          }/>
          <Route path="/" element={
            <>
              <Home />
            </>
          }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
