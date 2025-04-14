import { transformToNumber } from "./transformToNumber";

export function validateStringNotEmpty(value) {
    if (value.trim().length === 0) {
        throw new Error("Value cannot be empty or whitespace.");
    }
};

function validateNumber(value) {
    if (isNaN(value)) {
        throw new Error("Value must be a number.");
    }
};

export function cleanNumbers(inputNumbers){
    const numbers = [];
    for(const numberInput of inputNumbers){
        validateStringNotEmpty(numberInput);
        const number = transformToNumber(numberInput);
        validateNumber(number);
        numbers.push(number);
    }
    return numbers;
}