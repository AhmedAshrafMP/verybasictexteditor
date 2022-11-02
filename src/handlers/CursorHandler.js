export default class {
    cursorPosition = 0;
    constructor(newPosition) {
        this.cursorPosition = newPosition;
    }

    onCursorMoveTo(newPosition) {
        this.cursorPosition = newPosition < 0 ? 0 : newPosition;
        console.log("cursorPosition", this.cursorPosition)
    }

    getCursotPosition() {
        return this.cursorPosition < 0 ? 0 : this.cursorPosition;
    }

    onArrowsClick(arrow, text) {
        if (arrow === "ArrowLeft") {
            this.cursorPosition--;
        } else if (arrow === "ArrowRight") {
            this.cursorPosition++;
        }

        this.cursorPosition = this.cursorPosition > text.length ? text.length : this.cursorPosition;
    }
}