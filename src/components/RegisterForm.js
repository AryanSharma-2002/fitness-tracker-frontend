import React, { useState } from "react";
import eyeVisibleImage from "../images/eye.png";
import eyeInvisibleImage from "../images/invisible.png";
import "../css/register.css";
import { Link } from "react-router-dom";
import BASE_URL from "../helper/config";
import axios from "axios";
const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confPasswordVisible, setConfPasswordVisible] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confPassword") {
      setConfPasswordVisible(!confPasswordVisible);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (validateForm()) {
        alert("Registered successfully");
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        const dob = document.getElementById("dob").value;
        const password = document.getElementById("password").value;
        await axios.post(BASE_URL + "/api/register", {
          firstName: fname,
          lastName: lname,
          email,
          mobile,
          dob,
          password,
        });
      }
    } catch (error) {
      console.log("error while registering", error);
    }
  };

  const validateForm = async () => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
    const confPassword = document.getElementById("confPassword").value;

    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      mobile === "" ||
      dob === "" ||
      password === "" ||
      confPassword === ""
    ) {
      alert("Please fill in all fields.");
      return false;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!validateMobile(mobile)) {
      alert("Please enter a valid mobile number.");
      return false;
    }

    if (!validatePassword(password)) {
      alert(
        "Please enter a password with at least 8 characters, including at least one numeric, lowercase, uppercase alphabet, and special character."
      );
      return false;
    }

    if (password !== confPassword) {
      alert("Password and confirm password do not match.");
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@(?:gmail.com|\w+(?:\.\w+)+)$/;
    return re.test(email);
  };

  const validateMobile = (mobile) => {
    const re = /^\d{10}$/;
    return re.test(mobile);
  };

  const validatePassword = (password) => {
    const re =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return re.test(password);
  };

  return (
    <div className="register register-container">
      <section className="contact-us" id="contact">
        <div className="container-center demo-wrap">
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            id="register-form"
          >
            <h1 className="heading-contact">Register Here</h1>
            <div className="all-inputs">
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Second Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Type your mobile here"
                required
              />
              <input type="date" name="dob" id="dob" required />
              <div className="password-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  required
                />
                <span
                  className="eye-icon"
                  id="password-toggle"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  <img
                    src={passwordVisible ? eyeVisibleImage : eyeInvisibleImage}
                    alt="Toggle Password Visibility"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
              <div className="password-wrapper">
                <input
                  type={confPasswordVisible ? "text" : "password"}
                  name="confPassword"
                  id="confPassword"
                  placeholder="Confirm your password"
                  required
                />
                <span
                  className="eye-icon"
                  id="confPassword-toggle"
                  onClick={() => togglePasswordVisibility("confPassword")}
                >
                  <img
                    src={
                      confPasswordVisible ? eyeVisibleImage : eyeInvisibleImage
                    }
                    alt="Toggle Password Visibility"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
            </div>
            <input type="submit" value="submit" className="btn bg-green" />
            <div className="sign-in-container">
              <p className="sign-in-heading">Already Registered?</p>
              <Link to="/login" className="sign-in-link">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
