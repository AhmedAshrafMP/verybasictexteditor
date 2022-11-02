export default class {
    text = null;
    constructor(currentText,) {
        this.text = "";
    }

    addStringOnPosition(text, position) {
        let currentPosition = position;
        const textArray = this.text.split("");
        textArray.splice(currentPosition, 0, text);
        this.text = textArray.join("");
        return currentPosition + text.length;
    }

    removeStringOnPosition(position, length) {
        if (position === 0) {
            return position;
        }
        let currentPosition = position;
        const textArray = this.text.split("");
        textArray.splice(currentPosition - 1, length);
        this.text = textArray.join("");
        return currentPosition - length;
    }

    getText() {
        return this.text;
    }

}