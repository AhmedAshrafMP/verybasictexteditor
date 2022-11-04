export default class TextHanlder {
    text = null;

    /**
     * 
     * @param {*} startingText defult starting text
     */
    constructor(startingText = "") {
        this.text = startingText;
    }
    /**
     * add {string} to {position}
     * @param {string} text character to add
     * @param {int} position which position to add the character
     * @returns new position
     */
    addStringOnPosition(text, position) {
        let currentPosition = position;
        const textArray = this.text.split("");
        textArray.splice(currentPosition, 0, text);
        this.text = textArray.join("");
        return currentPosition + text.length;
    }

    /**
     * remove {length} characters from {position}
     * @param {*} position start position to delete
     * @param {int} length how many characters to delete
     * @returns new position
     */
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

    /**
     * get the current text value
     * @returns {string} text
     */
    getText() {
        return this.text;
    }

}