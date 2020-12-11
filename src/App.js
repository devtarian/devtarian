import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import Main from './pages/main/Main';
import ReviewForm from './pages/reviewForm/ReviewForm';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicLayout path="/login" component={Login} />
          <DefaultLayout path="/review" component={ReviewForm} />
          <DefaultLayout path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
