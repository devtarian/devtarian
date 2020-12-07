import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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

button, input, textarea {
  border: none;
  background-color: transparent;
  outline: 0;
  font: inherit;  
}
`;

export default GlobalStyles;
