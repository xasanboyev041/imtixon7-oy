import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {users.map((user) => (
        <li key={user.id} className="border p-4">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="rounded-full"
          />
          <h2 className="text-lg font-bold">
            {user.first_name} {user.last_name}
          </h2>
          <Link to={`/user/${user.id}`} className="text-blue-500">
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
