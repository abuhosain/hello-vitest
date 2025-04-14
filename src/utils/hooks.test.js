import {it, expect} from "vitest";
import { User } from "../hooks";

it('should have an email', () => {
    const testEmail = 'test@gmail.com';
    const user  = new User(testEmail);
    expect(user).toHaveProperty('email');
});

it("should update the email", () => {
    const testEmail = "test@gmail.com";
    const newTestEmail = "test2@gmail.com";

    const user = new User(testEmail);
    user.updateEmail(newTestEmail);
    expect(user.email).toBe(newTestEmail);
});

it("should be clear the value", () => {
    const testEmail = 'test@gmail.com';

    const user = new User(testEmail);
    user.cleanEmail();

    expect(user.email).toBe("");
}) 