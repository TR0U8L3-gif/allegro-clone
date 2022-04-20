import React from "react";
import {BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import './App.css';
import Nav from "./sites/Nav";

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
              <div style={{height:"1000px"}}><h1>Main</h1></div>
            </>
          }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
