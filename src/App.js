import React from 'react';
import TextHandler from './handlers/TextHandler';
import CursorHandler from './handlers/CursorHandler';
let currenText = "";
const textHandlerInstance = new TextHandler(currenText);
const cursorInstance = new CursorHandler(0);

function App() {

  const textareaRef = React.useRef();
  const [, updateState] = React.useState();


  const refreshComponent = React.useCallback(() => {
    textareaRef.current.value = textHandlerInstance.getText()
    if (textareaRef) {
      textareaRef.current.setSelectionRange(
        cursorInstance.getCursotPosition(),
        cursorInstance.getCursotPosition()
      )
    }
    /**
    * force update the component to re-render textarea with new values
    */
    updateState({})
  }, []);

  const onKeyUp = (e) => {
    const { key } = e;
    e.preventDefault();

    if (key === "Backspace") {
      cursorInstance.onCursorMoveTo(
        textHandlerInstance.removeStringOnPosition(
          cursorInstance.getCursotPosition(),
          1
        )
      );
    } else if (key.includes("Arrow")) {
      cursorInstance.onArrowsPress(key);
    } else {
      cursorInstance.onCursorMoveTo(
        textHandlerInstance.addStringOnPosition(key, cursorInstance.getCursotPosition())
      );
    }

    refreshComponent();
  }



  return (
    <div className="App">
      <textarea
        ref={textareaRef}
        value={textHandlerInstance.getText()}
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
