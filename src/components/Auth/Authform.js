import React from 'react';

export default function Authform({
  email,
  setEmail,
  password,
  setPassword,
  saveButton,
  errorMessage,
}) {
  return (
    <div className="form">
      <h1>Sign In or Create An Account Below:</h1>
      <p>{errorMessage}</p>
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
