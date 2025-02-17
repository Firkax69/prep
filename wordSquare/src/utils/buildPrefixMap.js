const buildPrefixMap = (words) => {

    let prefixMap = new Map(); // Stores prefixes and words starting with them

    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            let prefix = word.substring(0, i + 1); // Extract prefix up to index i
            if (!prefixMap.has(prefix)) { // Checks if the prefixMap does not already contain the current prefix (prefix)
                prefixMap.set(prefix, []); // If the prefix does not exist in the map, we add it to prefixMap with an empty array as its value.
            }

            prefixMap.get(prefix).push(word);
        }
    }

    return prefixMap;
}

export default buildPrefixMap;

// need to test it using node.js and test.js 