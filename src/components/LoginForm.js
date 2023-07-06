import React, { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import BASE_URL from "../helper/config";
import axios from "axios";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@(?:gmail.com|\w+(?:\.\w+)+)$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return re.test(password);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (email === "" || !validateEmail(email)) {
        alert("Please enter a valid Gmail address.");
        return;
      }

      if (password === "" || !validatePassword(password)) {
        alert(
          "Please enter a password with at least 8 characters, including at least one numeric, lowercase, uppercase alphabet, and special character."
        );
        return;
      }
      const response = await axios.post(BASE_URL + "/api/login", {
        email: email,
        password: password,
      });

      alert("You are logged in successfully");
    } catch (error) {
      alert(`error while logging ${error.message}`);
      console.log("error while logging ", error);
    }
  };

  return (
    <section className="contact-us login-container" id="contact">
      <div className="container-center demo-wrap">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="contact-heading lg-font text-black">Login Here</h2>
          <div className="all-inputs">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Submit" className="btn bg-green" />
          <div className="sign-up-container">
            <p className="sign-up-heading">Not Registered?</p>
            <Link to="/register" className="sign-up-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
