import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <h1>Gestion des adhérents</h1>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
