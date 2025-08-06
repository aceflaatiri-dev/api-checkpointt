import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css"; // Optional: For styling

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="user-list">
      <h2>List of Users</h2>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong><br />
            Email: {user.email}<br />
            Phone: {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;