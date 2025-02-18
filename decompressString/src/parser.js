import { Stack } from "./stackHandler.js";

export function decompressString(s) {
    let stack = new Stack();
    let numStack = new Stack();

    let currentStr = "";
    let currentNum = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            // If it's a digit, accumulate multi-digit numbers
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // Push current values and reset them
            numStack.push(currentNum);
            stack.push(currentStr);
            currentStr = "";
            currentNum = 0;
        } else if (char === ']') {
            // Pop from stack and repeat the substring
            let repeatCount = numStack.pop();
            let lastStr = stack.pop();
            currentStr = lastStr + currentStr.repeat(repeatCount);
        } else {
            // Append letters to current working string
            currentStr += char;
        }
    }

    return currentStr;
}