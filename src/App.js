import React from "react";
import { Title, TitleSmall } from "./styles";

function App() {
  return (
    <div>
      <Title fontSize={20}>
        Hello Sergio
        <span>Jazz Bass 69' </span>
      </Title>

      <TitleSmall>Blues</TitleSmall>
    </div>
  );
}

export default App;
