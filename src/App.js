import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import Main from './pages/main/Main';
import Detail from './pages/detail/Detail';
import VegWiki from './pages/vegWiki/VegWiki';
import ReviewForm from './pages/reviewForm/ReviewForm';
import SignUp from './pages/signUp/SignUp';
import Login from './pages/login/Login';
import FeedForm from './pages/feedForm/FeedForm';

const INIT_USER = {
  name: 'Harry',
  profileImgURL: 'http://placehold.it/40x40.png?text=A',
};

function App() {
  const [user, setUser] = useState(INIT_USER);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicLayout path="/signup" component={SignUp} />
          <PublicLayout path="/login" user={user} component={Login} />
          <DefaultLayout path="/detail" component={Detail} />
          <DefaultLayout path="/vegwiki" component={VegWiki} />
          <DefaultLayout path="/feed" component={FeedForm} />
          <DefaultLayout path="/review" component={ReviewForm} />
          <DefaultLayout path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
