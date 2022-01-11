import React from 'react';

export default function Authform({ email, setEmail, password, setPassword, saveButton }) {
  return (
    <div className="form">
      <h1>Sign In or Create An Accont Below:</h1>
      <div className="user-form">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="password-form">
        <label>Password:</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="button">
        <button onClick={saveButton}>Next</button>
      </div>
    </div>
  );
}

// make an error message later, and a message that it was successful
// create a loading state
