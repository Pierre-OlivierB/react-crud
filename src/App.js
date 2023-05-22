import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteUser from "./components/DeleteUser";
import Login from "./components/Login";

function getCookies() {
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
  }
  return cookies;
}

function App() {
  var myCookies = getCookies();
  useEffect(() => {}, []);

  return (
    <div className="container">
      <h1>Gestion des adhérents</h1>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            {myCookies.tokenco ? (
              <Route path="/home" element={<User />} />
            ) : (
              <Route path="/*" element={<Login />} />
            )}
            {myCookies.tokenco ? (
              <Route path="/create" element={<CreateUser />} />
            ) : (
              <Route path="/*" element={<Login />} />
            )}
            {myCookies.tokenco ? (
              <Route path="/update/:id_user" element={<UpdateUser />} />
            ) : (
              <Route path="/*" element={<Login />} />
            )}
            {myCookies.tokenco ? (
              <Route path="/supprimer/:id_user" element={<DeleteUser />} />
            ) : (
              <Route path="/*" element={<Login />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
