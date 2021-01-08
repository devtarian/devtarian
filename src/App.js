import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './history';
import { DefaultLayout, PublicLayout } from './layouts';
import pages from './pages';

function App() {
  const { PostDetail, FeedForm, Login, Main, ReviewForm, SignUp, VegWiki, WikiDetail, WikiForm } = pages;

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PublicLayout path="/signup" component={SignUp} />
          <PublicLayout path="/login" component={Login} />
          <DefaultLayout path="/detail" component={PostDetail} />
          <DefaultLayout path="/wikidetail" component={WikiDetail} />
          <DefaultLayout path="/vegwiki" component={VegWiki} />
          <DefaultLayout path="/feed" component={FeedForm} />
          <DefaultLayout path="/review" component={ReviewForm} />
          <DefaultLayout path="/wiki" component={WikiForm} />
          <DefaultLayout path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
