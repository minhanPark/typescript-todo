import React from "react";
import Header from "./components/Header";
import TodosContainer from "./components/TodosContainer";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TodosContainer />
    </>
  );
}

export default App;
