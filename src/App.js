import React from "react";
import {BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import './App.css';
import Nav from "./sites/Nav";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
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
            <Nav />
          }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
