import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './history';
import { DefaultLayout, PublicLayout } from './layouts';
import pages from './pages';
import SearchPage from './pages/searchPage/SearchPage';

function App() {
  const { StoreDetail, FeedForm, Login, Main, ReviewForm, SignUp, VegWiki, WikiDetail, WikiForm } = pages;

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PublicLayout path="/signup" component={SignUp} />
          <PublicLayout path="/login" component={Login} />
          <DefaultLayout path="/storeDetail/:storeId" component={StoreDetail} />
          <DefaultLayout path="/wikiDetail" component={WikiDetail} />
          <DefaultLayout path="/vegwiki" component={VegWiki} />
          <DefaultLayout path="/feed" component={FeedForm} />
          <DefaultLayout path="/review" component={ReviewForm} />
          <DefaultLayout path="/wiki" component={WikiForm} />
          <DefaultLayout path="/search" component={SearchPage} />
          <DefaultLayout path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
