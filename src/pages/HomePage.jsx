import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to User Management App</h1>
      <div className="homepage-buttons">
        <Link to="/register">
          <Button type="primary" className="homepage-register-btn">
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button type="default" className="homepage-login-btn">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
