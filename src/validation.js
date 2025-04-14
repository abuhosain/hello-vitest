export function validateEmail(email) {
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format.");
    }
};

export function validateArrayNotEmpty (array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Array cannot be empty.");
    }
};