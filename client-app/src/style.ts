import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  :root, body, #root {
    width: 100%;
    height: 100%;
  }

  #root, input, textarea, label {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }

  #root, input, textarea {
    font-family: Roboto, Arial, sans-serif;
  }
`;

export {
    GlobalStyle
}