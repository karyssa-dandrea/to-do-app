import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUser, logout } from './services/users';
import './App.css';
import { useState } from 'react';
import Auth from './views/Auth/Auth';
import Todos from './views/Todos/Todo';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <Todos />
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
