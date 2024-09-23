import React from "react";
import { Link } from "react-router-dom";
import "./UserList.css"

const UserList = ({ users }) => {
  return (
    <ul className="user-list-container">
      {users.map((user) => (
        <li key={user.id} className="user-card">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="user-avatar"
          />
          <h2 className="user-name">
            {user.first_name} {user.last_name}
          </h2>
          <Link to={`/user/${user.id}`} className="user-link">
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
