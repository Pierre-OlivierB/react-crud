import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center justify-items-center">
      <div className="w-50 bg-white">
        <Link to="/create" className="btn btn-success">
          New User
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((us, i) => (
              <tr key={i}>
                <td>{us.name}</td>
                <td>{us.email}</td>
                <td>
                  <Link
                    to={{
                      pathname: `update/${us.id_user}`,
                    }}
                    className="btn btn-primary"
                    state={{ name: us.name, mail: us.email }}
                  >
                    Modifier
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
