import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

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
    {
      id: 2,
      title: "sleep early",
      desc: "please Sleep early asap",
      isCompleted: false,
    },
    {
      id: 3,
      title: "game",
      desc: "Play game with friend",
      isCompleted: true,
    },
  ]);
  // 삭제 기능
  const deleteTodo = (event: React.SyntheticEvent, id: number): void => {
    event.stopPropagation();
    const newArr = todos.filter((todo) => todo.id !== id);
    setTodos(newArr);
  };
  // Complete수정기능
  const toggleComplete = (id: number): void => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newArr);
  };
  // 추가 기능
  const addTodo = ({ title, desc }: { title: string; desc: string }): void => {
    const id = todos[todos.length - 1]["id"] + 1;
    setTodos([
      ...todos,
      {
        id,
        title,
        desc,
        isCompleted: false,
      },
    ]);
  };
  return (
    <>
      <Container>
        {todos.map((item: ITodo) => (
          <Todo
            {...item}
            key={item.id}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </Container>
      <TodoInput addTodo={addTodo} />
    </>
  );
};

export default TodosContainer;
