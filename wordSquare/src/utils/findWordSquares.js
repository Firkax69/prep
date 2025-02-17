import buildPrefixMap from "./buildPrefixMap.js";

const findWordSquares = (words) => {
    if (words.length === 0) return [];

    let K = words[0].length;
    let prefixMap = buildPrefixMap(words);
    let result = [];

    const backtrack = (path) => {
        if (path.length === K) {
            result.push([...path]); // found a valid word square
            return;
        }

        let index = path.length;
        let prefix = path.map(word => word[index]).join(""); // Build prefix
        let candidates = prefixMap.get(prefix) || [];

        for (let candidate of candidates) {
            path.push(candidate);
            backtrack(path);
            path.pop();
        }
    };

    for (let word of words) {
        backtrack([word]);
    }

    return result;
}

export default findWordSquares;