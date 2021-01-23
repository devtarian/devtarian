import React from 'react';
import { Router, Switch } from 'react-router-dom';

import history from './history';
import { DefaultLayout, FormLayout, PublicLayout } from './layouts';
import pages from './pages';

function App() {
  const {
    StoreDetail,
    FeedForm,
    Login,
    Main,
    ReviewForm,
    SignUp,
    VegWiki,
    WikiDetail,
    WikiForm,
    SearchPage,
    NotFound,
  } = pages;

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PublicLayout path="/signup" component={SignUp} />
          <PublicLayout path="/login" component={Login} />
          <DefaultLayout path="/storeDetail/:storeId" component={StoreDetail} />
          <DefaultLayout path="/wikiDetail/:wikiId" component={WikiDetail} />
          <DefaultLayout path="/vegwiki" component={VegWiki} />
          <DefaultLayout path="/search" component={SearchPage} />
          <DefaultLayout path="/" exact component={Main} />
          <FormLayout path="/feed" component={FeedForm} />
          <FormLayout path="/review/:storeId" component={ReviewForm} />
          <FormLayout exact path="/wikiForm" component={WikiForm} />
          <FormLayout path="/wikiForm/:wikiId" component={WikiForm} />
          <DefaultLayout path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
