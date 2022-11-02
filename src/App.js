import logo from './logo.svg';
import './App.css';
import React from 'react';
import TextHandler from './handlers/TextHandler';
import CursorHandler from './handlers/CursorHandler';
let currenText = "";
const textHandlerInstance = new TextHandler(currenText);
const cursorHanlderInstance = new CursorHandler(0);
let cursorPosition = 0;

function App() {

  const textareaRef = React.useRef();
  const [text, setText] = React.useState("");
  const [, updateState] = React.useState();
  const refreshComponent = React.useCallback(() => {
    textareaRef.current.value = textHandlerInstance.getText()
    if (textareaRef) {
      textareaRef.current.setSelectionRange(
        cursorHanlderInstance.getCursotPosition(),
        cursorHanlderInstance.getCursotPosition()
      )
    }
    updateState({})
  }, []);

  const onKeyUp = (e) => {
    e.preventDefault();
    const { nativeEvent, target, key } = e;

    if (key === "Backspace") {
      cursorHanlderInstance.onCursorMoveTo(
        textHandlerInstance.removeStringOnPosition(
          cursorHanlderInstance.getCursotPosition(),
          1
        )
      );
    } else if (key.includes("Arrow")) {
      cursorHanlderInstance.onCursorMoveTo(
        cursorHanlderInstance.getCursotPosition() + (key === "ArrowLeft" ? -1 : 1)
      );
    } else {
      cursorHanlderInstance.onCursorMoveTo(
        textHandlerInstance.addStringOnPosition(key, cursorHanlderInstance.getCursotPosition())
      );
    }

    refreshComponent();
  }



  return (
    <div className="App">
      <textarea
        ref={textareaRef}
        onKeyDown={(e) => onKeyUp(e)} style={{
          width: "100vh",
          height: "100vh",
          backgroundColor: "#c9c9c9",
          color: "#000000",
          outline: "none",
          borrderRadius: "0px",
          border: "none",
        }} />
    </div>
  );
}

export default App;
