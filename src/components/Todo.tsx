import React from "react";
import styled from "styled-components";

interface ITodo {
  id: number;
  title: string;
  desc: string;
  isCompleted: boolean;
  deleteTodo(event: React.SyntheticEvent, id: number): void;
  toggleComplete(id: number): void;
}

interface IContainer {
  isCompleted: boolean;
}

interface ITitle {
  isCompleted: boolean;
}

interface IPara {
  isCompleted: boolean;
}

const Wrapper = styled.div<IContainer>`
  background-color: ${(props) => (props.isCompleted ? "#f19066" : "#dfe6e9")};
  height: 100px;
  padding: 7px 9px;
  border: 1px solid #f3a683;
`;

const Title = styled.h2<ITitle>`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
  color: ${({ isCompleted }) => (isCompleted ? "white" : "black")};
`;

const Para = styled.p<IPara>`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
  color: ${({ isCompleted }) => (isCompleted ? "white" : "black")};
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  background-color: #596275;
  border: none;
  color: white;
  padding: 6px 8px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #303952;
  }
`;

const Todo = ({
  id,
  title,
  desc,
  isCompleted,
  deleteTodo,
  toggleComplete,
}: ITodo): JSX.Element => {
  return (
    <Wrapper onClick={() => toggleComplete(id)} isCompleted={isCompleted}>
      <Title isCompleted={isCompleted}>{title}</Title>
      <Para isCompleted={isCompleted}>{desc}</Para>
      <BtnWrapper>
        <Btn onClick={(e) => deleteTodo(e, id)}>Delete</Btn>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Todo;
