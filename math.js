export function  add(numbers) {
    let sum = 0;
    for (const numbers of numbers) {
        sum += numbers;
    }
    return sum;
}