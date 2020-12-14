import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import Main from './pages/main/Main';
import ReviewForm from './pages/reviewForm/ReviewForm';
import SignUp from './pages/signUp/SignUp';
import Login from './pages/login/Login';

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicLayout path="/signup" component={SignUp} />
          <PublicLayout path="/login" user={user} component={Login} />
          <DefaultLayout path="/review" component={ReviewForm} />
          <DefaultLayout path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
