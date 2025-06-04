import React from 'react';
import './App.css';

function WelcomePage({ username, email }) {
  return (
    <div className="welcome-page">
      <h1>Welcome, {username}!</h1>
      <p>Your email: {email}</p>
    </div>
  );
}

export default WelcomePage;