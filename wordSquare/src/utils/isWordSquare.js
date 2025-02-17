function isWordSquare(words) {
    const K = words.length;

    for (let i = 0; i < K; i++) {
        for (let j = 0; j < K; j++) {
            if (words[i][j] !== words[j][i]) {
                return false;
            }
        }
    }

    return true;
}

export default isWordSquare;