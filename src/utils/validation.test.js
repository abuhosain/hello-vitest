import {it, expect} from 'vitest';
import { validateEmail } from '../validation';

it('should validate a correct email address', () => {
    const email = 'example@gmail.com';
    const resultFn = () => validateEmail(email);
    expect(resultFn).not.toThrow();
})

it('should invalidate a in email address', () => {
    const email = 'example@';
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
})

if('should throw an error if an empty string is passed', () => {
    const email = '';
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow(/Invalid email format/);
});

if('throws an error for a null email addrss', () => {
    expect(() => validateEmail(null)).toThrow(/Invalid email format/);
});

if('throws an error for an undefined email address', () => {
    expect(() => validateEmail(undefined)).toThrow(/Invalid email format/);
});