import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:3001/createaccount", { name: nom, email, pass })
      .then((res) => {
        console.log(res);
        navigate("/home");
      });
  };
  const handleConnect = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:3001/login", { name: nom, email, pass })
      .then((res) => {
        console.log(res);
        navigate("/home");
      });
  };

  return (
    <div className="d-flex bg-primary justify-content-center justify-items-center p-3">
      <div className="w-50 bg-white rounded p-3">
        <h2>Identification ou création</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nom :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              placeholder="nom"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="emails"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="pass"
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-evenly align-items-center">
            <input
              type="submit"
              className="btn btn-warning"
              value="Créer un compte"
            />
            <input
              type="submit"
              className="btn btn-success"
              value="Se connecter"
              onClick={handleConnect}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
