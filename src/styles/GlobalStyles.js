import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Sora', sans-serif;
    background-color: #111111;
    color: white;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
  }

  .gradient-text {
    background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  section {
    margin: 0;
    padding: 0;
  }
  * {
  margin: 0;
  padding: 0;
 
}
`;

export default GlobalStyles;
