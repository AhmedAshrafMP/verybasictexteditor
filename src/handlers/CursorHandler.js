export default class CursorHandler{

    /**
     * {int} cursor position
     */
    cursorPosition = 0;

    /**
     * 
     * @param {*} newPosition set the cursor position to {newPosition}
     */
    constructor(newPosition) {
        this.cursorPosition = newPosition;
    }

    /**
     * move the cursor to {newPosition} in the textarea
     * @param {int} newPosition 
     */
    onCursorMoveTo(newPosition) {
        this.cursorPosition = newPosition < 0 ? 0 : newPosition;
        console.log("cursorPosition", this.cursorPosition)
    }

    /**
     * get the current cursor position
     * @returns {int} cursor position
     */
    getCursotPosition() {
        return this.cursorPosition < 0 ? 0 : this.cursorPosition;
    }

    /**
     * one keyboard arrows keys was pressed
     * @param {string} arrow which arrow was pressed
     */
    onArrowsPress(arrow) {
        if (arrow === "ArrowLeft") {
            this.cursorPosition--;
        } else if (arrow === "ArrowRight") {
            this.cursorPosition++;
        }

        return this.cursorPosition
    }
}