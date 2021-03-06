import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
}

li {
  list-style: none;
}

img {
vertical-align: top;
}

a {
color: ${(props) => props.theme.color[0]};
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

select:focus {
      outline: none;
    }
`;

export default GlobalStyles;
