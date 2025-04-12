import {it, expect} from 'vitest';
import { add } from './math';

it('should return the courrect sum if an array of number is provided', () => {
    // Arrange
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((acc, number) => acc + number, 0);
    // Action
    const result = add(numbers);
    // Assertion
    expect(result).toBe(expectedResult);
});

it('should provided NaN if at least one invalid number is probided', () => {
    // Arrangeconst numbers = [1, "invalid", 3];
    const numbers = [1, "invalid", 3];
    // Action
    const result = add(numbers);
    // Assertion
    expect(result).toBeNaN();
});

it('should return the courrect sum if an array numeric string is provided ', () => {
    // Arrange
    const numbers = ["1", 2, 3];
    const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);
    // Action
    const result = add(numbers);
    // Assertion
    expect(result).toBe(expectedResult);
});