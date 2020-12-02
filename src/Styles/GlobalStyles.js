import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 100%;
}

li {
  list-style: none;
}

img {
  vertical-align: top;
}

a {
color: #000;
text-decoration: none;
}

button {
  cursor: pointer;
}

button, input {
  border: none;
  background-color: transparent;
  outline: 0;
  font: inherit;  
}
`;

export default GlobalStyles;
