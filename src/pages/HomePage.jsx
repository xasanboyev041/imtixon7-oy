import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto text-center my-10 p-5 bg-white shadow-lg rounded-md">
      <h1 className="text-4xl font-bold mb-5">
        Welcome to User Management App
      </h1>
      <div className="space-x-4">
        <Link to="/register">
          <Button
            type="primary"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold"
          >
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button
            type="default"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold"
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
