import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <header className="navbar-container">
      <Menu theme="dark" mode="horizontal" className="navbar-menu">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="create-user">
          <Link to="/create-user">Create User</Link>
        </Menu.Item>
        <Menu.Item key="delete-user">
          <Link to="/delete-user">Delete User</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default Navbar;
