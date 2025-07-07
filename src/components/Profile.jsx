import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then(setUser);
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <header>
        <button className="btn" onClick={() => navigate("/")}>Back to Dashboard</button>
        <span>{user.name}</span>
      </header>
      <div className="profile-box">
        <h2>Welcome, {user.name}</h2>
        <p><strong>User ID:</strong> {user.id}</p>
        <p><strong>Email ID:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
}

export default Profile;
