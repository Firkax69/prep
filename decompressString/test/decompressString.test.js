import { decompressString } from "../src/parser.js";

describe("decompressString", () => {
    test("decompress non-nested string", () => {
        expect(decompressString('2[abc]')).toBe('abcabc')
    });

    test('decompresses non-nested string', () => {
        expect(decompressString('3[abc]4[ab]c')).toBe('abcabcabcababababc');
    });

    test('handles more complex nested cases', () => {
        expect(decompressString('1[x2[y]z]')).toBe('xyyz');
    });

    test('handles multiple digit numbers', () => {
        expect(decompressString('12[ab]')).toBe('abababababababababababab');
    });
})