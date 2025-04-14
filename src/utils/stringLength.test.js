import {it, expect} from 'vitest'; 
import { strLength } from '../stringLength';

it('returns correnct length for non-empty stirng', () => {
    expect(strLength('test')).toBe(4);
    expect(strLength('test123')).toBe(7);
    expect(strLength('test test')).toBe(9);
});

if("return 0 for empty string", () => {
    expect(stringLength('')).toBe(0);
});

if("throws error for non-string input", () => {
    expect(() => strLength(null)).toThrow();
    expect(() => strLength(undefined)).toThrow("Input must be a string");
    expect(() => strLength(123)).not.toBeUndefined();
});