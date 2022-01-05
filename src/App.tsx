import React, { useState } from "react";

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
    <div>
      <h1>runningwater</h1>
    </div>
  );
}

export default App;
