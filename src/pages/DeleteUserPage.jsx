import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { Input, Button, notification } from "antd";
import "../styles/DaleteUserPage.css"

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
    <div className="container">
      <h1>Delete User</h1>
      <Input
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="my-5"
      />
      <Button
        type="primary"
        onClick={handleDelete}
        loading={loading}
        className="w-full"
      >
        Delete User
      </Button>
    </div>
  );
};

export default DeleteUserPage;
