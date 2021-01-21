import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import history from './history';
import { DefaultLayout, FormLayout, PublicLayout } from './layouts';
import pages from './pages';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
          <FormLayout isLoggedIn={isLoggedIn} path="/feed" component={FeedForm} />
          <FormLayout isLoggedIn={isLoggedIn} path="/review/:storeId" component={ReviewForm} />
          <FormLayout isLoggedIn={isLoggedIn} exact path="/wikiForm" component={WikiForm} />
          <FormLayout isLoggedIn={isLoggedIn} path="/wikiForm/:wikiId" component={WikiForm} />
          <DefaultLayout path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
