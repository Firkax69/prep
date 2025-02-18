import { expect } from 'chai';
import {distributeCandies} from '../src/distributeCandies.js';

// TEST cases

// describe() is a Mocha test suite function.


describe('distributeCandies', function() {
    it('should return 3 for [1,1,2,2,3,3]', function() {
        const result = distributeCandies([1,1,2,2,3,3]);
        expect(result).to.equal(3);
    });

    it('should return 2 for [1,1,2,3]', function() {
        const result = distributeCandies([1,1,2,3]);
        expect(result).to.equal(2);
    })

    it('should return 1 for [6,6,6,6]', function() {
        const result = distributeCandies([6,6,6,6]);
        expect(result).to.equal(1);
    })

    it('should return 3 for [1, 2, 2, 3, 3, 3, 4, 5]', function() {
        const result = distributeCandies([1, 2, 2, 3, 3, 3, 4, 5]);
        expect(result).to.equal(4);
    });
})