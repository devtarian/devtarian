import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import { theme } from './config/config';
import apis from './Service/apis';

apis.authApi
  .getMe()
  .then((res) => {
    //console.log(res)
  })
  .catch((err) => {
    console.log(err);
  });

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
