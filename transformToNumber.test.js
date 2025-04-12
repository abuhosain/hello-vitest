import {it, expect} from 'vitest';
import { transformToNumber } from './transformToNumber';

it("should return a number if a numeric string is provided", () => {
    // Arrange
    const value = "1";
    const expectedResult = +value;
    // Action
    const result = transformToNumber(expectedResult);
    // Assertion
    expect(result).toBeTypeOf("number");
    expect(isNaN(result)).not.toBe(true);
});