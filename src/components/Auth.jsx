import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";

function Auth() {
  const [mess, setMess] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => {
      if (res.data.Status === "Ok") {
        setLoggedIn(true);
      } else {
        console.log(res.data.Status);
        setMess(res.data.Message);
        alert(mess);
      }
    });
  }, []);
  return loggedIn ? <Outlet /> : <Login />;
}

export default Auth;
