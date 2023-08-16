import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/login/login";
import Profile from "./Components/profile/Profile";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login/:id" element={<Login/>} />
          <Route path="/profile/:id" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}