import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/userSlice";
import { useParams } from "react-router-dom";
import { Card, Spin } from "antd";
import "../styles/UserDatailsPage.css";

const UserDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleUser, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return (
      <div className="userdetails-loading">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="userdetails-container">
      {singleUser && (
        <Card
          title={`${singleUser.first_name} ${singleUser.last_name}`}
          className="userdetails-card"
          cover={
            <img
              alt="avatar"
              src={singleUser.avatar}
              className="userdetails-avatar"
            />
          }
        >
          <p className="userdetails-email">Email: {singleUser.email}</p>
        </Card>
      )}
    </div>
  );
};

export default UserDetailsPage;
