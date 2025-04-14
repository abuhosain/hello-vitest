import { it, expect, describe } from 'vitest';
import { validateArrayNotEmpty, validateEmail } from '../validation';

describe('validateEmail', () => {
  it('should validate a correct email address', () => {
    const email = 'example@gmail.com';
    const resultFn = () => validateEmail(email);
    expect(resultFn).not.toThrow();
  });

  it('should throw for an invalid email address', () => {
    const email = 'example@';
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it('should throw if an empty string is passed', () => {
    const email = '';
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow(/Invalid email format/);
  });

  it('should throw for a null email address', () => {
    expect(() => validateEmail(null)).toThrow(/Invalid email format/);
  });

  it('should throw for an undefined email address', () => {
    expect(() => validateEmail(undefined)).toThrow(/Invalid email format/);
  });
});

// Tests for validateArrayNotEmpty
describe('validateArrayNotEmpty', () => {
  it('should validate a non-empty array', () => {
    const array = [2, 3, 4];
    const resultFn = () => validateArrayNotEmpty(array);
    expect(resultFn).not.toThrow();
  });

  it('should throw an error for a null array', () => {
    expect(() => validateArrayNotEmpty(null)).toThrow();
  });

  it('should throw an error for an undefined array', () => {
    expect(() => validateArrayNotEmpty(undefined)).toThrow();
  });

  it('should throw an error for an empty array', () => {
    expect(() => validateArrayNotEmpty([])).toThrow();
  });
});
