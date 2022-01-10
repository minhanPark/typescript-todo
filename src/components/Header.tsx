import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #f3a683;
  color: white;
  padding: 8px 10px;
  border: 2px solid #e77f67;
  margin: 30px auto;
`;

const TextWrapper = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Header = (): JSX.Element => {
  return (
    <Container>
      <TextWrapper>Typescript Todos</TextWrapper>
    </Container>
  );
};

export default Header;
