import isWordSquare from "./utils/isWordSquare.js";
import findWordSquares from "./utils/findWordSquares.js";

const testWords = ["AREA", "BALL", "DEAR", "LADY", "LEAD", "YARD"];

console.log("checking if ['BALL', 'AREA', 'LEAD', 'LADY'] is a word square:");

console.log(isWordSquare(['BALL', 'AREA', 'LEAD', 'LADY']));
// should print true

console.log("\nFinding all word squares from the given words:");
console.log(findWordSquares(testWords));
// Expected output: [["BALL", "AREA", "LEAD", "LADY"]
// ,
// ["LADY", "AREA", "DEAR", "YARD"]]