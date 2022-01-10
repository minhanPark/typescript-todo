import React, { useState } from "react";
import styled from "styled-components";

interface ITodo {
  id: number;
  title: string;
  desc: string;
  isCompleted: boolean;
}

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  border: 2px solid #f3a683;
  margin: 0 auto;
  min-height: 500px;
`;

const TodosContainer = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "Make todo",
      desc: "make todo with me",
      isCompleted: false,
    },
  ]);
  return <Container>sdsdsdsdsd</Container>;
};

export default TodosContainer;
