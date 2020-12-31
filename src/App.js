import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import pages from './pages';

const INIT_USER = {
  name: 'Harry',
  thumbNail: 'http://placehold.it/40x40.png?text=A',
};

function App() {
  const { PostDetail, FeedForm, Login, Main, ReviewForm, SignUp, VegWiki, WikiDetail, WikiForm } = pages;
  const [user, setUser] = useState(INIT_USER);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicLayout path="/signup" component={SignUp} />
          <PublicLayout path="/login" user={user} component={Login} />
          <DefaultLayout path="/detail" user={user} component={PostDetail} />
          <DefaultLayout path="/wikidetail" user={user} component={WikiDetail} />
          <DefaultLayout path="/vegwiki" user={user} component={VegWiki} />
          <DefaultLayout path="/feed" user={user} component={FeedForm} />
          <DefaultLayout path="/review" user={user} component={ReviewForm} />
          <DefaultLayout path="/wiki" user={user} component={WikiForm} />
          <DefaultLayout path="/" user={user} component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
