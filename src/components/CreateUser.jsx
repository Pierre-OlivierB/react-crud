import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:3001/create", { name: nom, email })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

  return (
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
        <input type="submit" className="btn btn-success" />
      </div>
    </form>
  );
}

export default CreateUser;
