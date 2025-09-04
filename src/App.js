import React from "react";
import ButtonWidget from "./WidgetButton";

function App() {
  return (
    <div>
      <h1>Widget Dev App</h1>
      <ButtonWidget apiUrl="http://localhost:8000/chat" />
    </div>
  );
}

export default App;
