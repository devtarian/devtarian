import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import pages from './pages';

const INIT_USER = {
  name: 'Harry',
  profileImgURL: 'http://placehold.it/40x40.png?text=A',
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
          <DefaultLayout path="/detail" component={PostDetail} />
          <DefaultLayout path="/wikidetail" component={WikiDetail} />
          <DefaultLayout path="/vegwiki" component={VegWiki} />
          <DefaultLayout path="/feed" component={FeedForm} />
          <DefaultLayout path="/review" component={ReviewForm} />
          <DefaultLayout path="/wiki" component={WikiForm} />
          <DefaultLayout path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
