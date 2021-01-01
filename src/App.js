import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import pages from './pages';

const INIT_USER = {
  username: '',
  thumbNail: '',
};

function App() {
  const { PostDetail, FeedForm, Login, Main, ReviewForm, SignUp, VegWiki, WikiDetail, WikiForm } = pages;
  const [user, setUser] = useState(INIT_USER);

  const onGetUser = (userData) => {
    setUser(userData);
  };

  const onLogOut = () => {
    setUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicLayout path="/signup" component={SignUp} />
          <PublicLayout path="/login" user={user} onGetUser={onGetUser} component={Login} />
          <DefaultLayout path="/detail" user={user} onLogOut={onLogOut} component={PostDetail} />
          <DefaultLayout path="/wikidetail" user={user} onLogOut={onLogOut} component={WikiDetail} />
          <DefaultLayout path="/vegwiki" user={user} onLogOut={onLogOut} component={VegWiki} />
          <DefaultLayout path="/feed" user={user} onLogOut={onLogOut} component={FeedForm} />
          <DefaultLayout path="/review" user={user} onLogOut={onLogOut} component={ReviewForm} />
          <DefaultLayout path="/wiki" user={user} onLogOut={onLogOut} component={WikiForm} />
          <DefaultLayout path="/" user={user} onLogOut={onLogOut} component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
