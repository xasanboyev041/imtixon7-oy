import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { Input, Button, notification } from "antd";

const DeleteUserPage = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    dispatch(deleteUser(userId))
      .then(() => {
        notification.success({ message: "User Deleted Successfully" });
      })
      .catch(() => {
        notification.error({ message: "Failed to Delete User" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto my-10 p-5 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-center mb-5">Delete User</h1>
      <Input
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="my-5 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <Button
        type="primary"
        onClick={handleDelete}
        loading={loading}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md"
      >
        Delete User
      </Button>
    </div>
  );
};

export default DeleteUserPage;
