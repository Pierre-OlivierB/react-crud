import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
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
            <Route path="/update/:idUser" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
