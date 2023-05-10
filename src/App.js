import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteUser from "./components/DeleteUser";
import Login from "./components/Login";

function App() {
  return (
    <div className="container">
      <h1>Gestion des adhérents</h1>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<User />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/update/:id_user" element={<UpdateUser />} />
            <Route path="/supprimer/:id_user" element={<DeleteUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
