import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/userSlice";
import { useParams } from "react-router-dom";
import { Card, Spin } from "antd";

const UserDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleUser, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {singleUser && (
        <Card
          title={`${singleUser.first_name} ${singleUser.last_name}`}
          style={{ width: 300 }}
          cover={
            <img
              alt="avatar"
              src={singleUser.avatar}
              className="w-full object-cover h-64"
            />
          }
          className="shadow-lg"
        >
          <p className="text-lg font-medium">Email: {singleUser.email}</p>
        </Card>
      )}
    </div>
  );
};

export default UserDetailsPage;
