import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import './App.css';

function App() {
  // State for username, email, and page navigation
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    setIsLoggedIn(true); // Switch to the welcome page
  };

  // Show login page or welcome page based on isLoggedIn state
  return (
    <div className="App">
      {isLoggedIn ? (
        <WelcomePage username={username} email={email} />
      ) : (
        <>
          <h1>Login Page</h1>
          <div className="login-form">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={() => {}} // Password not used on welcome page
            />
            <button onClick={handleSubmit}>Login</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;