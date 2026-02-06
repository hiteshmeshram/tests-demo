import { describe, expect, it } from '@jest/globals';
import { sum } from './index.js';
describe("Testing for sum module", () => {
    it("should sum 1 and 2 correctly", () => {
        expect(sum(1, 3)).toBe(4);
    });
    it("should return sum for 1 and 4 correctly", () => {
        expect(sum(1, 3)).toBe(4);
    });
});
//# sourceMappingURL=index.test.js.map