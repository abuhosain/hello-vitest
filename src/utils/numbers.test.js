import { it, expect } from "vitest";    
import { cleanNumbers } from "../numbers";

it('should return an array of numbers if an array of string number is possible', () => {
    const stringNumbers = ['1', '2'];
    const result = cleanNumbers(stringNumbers);
    expect(result[0]).toBeTypeOf('number'); 
});

it('should thorow an error if an empty string is provided', () => {
    const stringNumbers = ['1', '2', ''];
    const resultFn = () => cleanNumbers(stringNumbers);
    expect(resultFn).toThrow(/Value cannot be empty or whitespace/);
}
);