import React from 'react';

function Profile({ user, onLogout }) {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Profile;
