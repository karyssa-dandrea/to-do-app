import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import { signInUser, signupUser } from '../../services/users';
import Authform from '../../components/Auth/Authform';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');

  const saveButton = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };
  return (
    <div>
      <div className="tabs">
        <h3
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In:
        </h3>

        <h3
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up:
        </h3>
      </div>
      <p> Type:</p>
      <Authform
        password={password}
        email={email}
        setPassword={setPassword}
        setEmail={setEmail}
        errorMessage={errorMessage}
        saveButton={saveButton}
      />
    </div>
  );
}
