import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 20px;
  padding: 20px;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: bold;
`;
const Message = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;
const Text = styled.p``;

function App() {
  const [text, setText] = useState<string>("");

  const handleClick = async () => {
    const t = await navigator.clipboard.readText();
    setText(t);
  };

  return (
    <Container onClick={handleClick}>
      <Title>クリップボードの中身を盗むだけのサイト</Title>
      {text ? (
        <Message>盗んだよ(笑)</Message>
      ) : (
        <Message>クリックすると盗むよ</Message>
      )}
      {text && <Text>{text}</Text>}
    </Container>
  );
}

export default App;
