import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid #f3a683;
  max-width: 450px;
  width: 100%;
  margin: 20px auto;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SInput = styled.input`
  padding: 8px 13px;
`;

const STextArea = styled.textarea`
  padding: 8px 13px;
`;

const SButton = styled.button`
  border: none;
  background-color: #f3a683;
  color: #ced6e0;
  &:hover {
    background-color: #e15f41;
    color: #2f3542;
  }
`;

const TodoInput = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <Wrapper>
      <SForm onSubmit={handleSubmit}>
        <SInput
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <STextArea
          placeholder="오늘 할 일"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <SButton>입력</SButton>
      </SForm>
    </Wrapper>
  );
};

export default TodoInput;
