import React, { useState } from "react";
import Header from "./components/Header";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

interface ITodo {
  id: number;
  title: string;
  desc: string;
  isCompleted: boolean;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "Make todo",
      desc: "make todo with me",
      isCompleted: false,
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>runningwater</h1>
    </>
  );
}

export default App;
