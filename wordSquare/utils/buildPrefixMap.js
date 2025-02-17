const buildPrefixMap = (words) => {
    let prefixMap = new Map(); // Stores prefixes and words starting with them

    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            let prefix = word.substring(0, i + 1); // Extract prefix up to index i
            if (!prefixMap.has(prefix)) {
                prefixMap.set(prefix, []);
            }

            prefixMap.get(prefix).push(word);
        }
    }

    return prefixMap;
}

export default buildPrefixMap;
