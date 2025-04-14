import { it, expect } from "vitest";
import { encryptMessage, encryptMessagePromise } from "../async";

it('should encrypt a message', async () => {
    const message = "Abu Hosain";
    const secretKey = "343q4324";

    const encryptData = await new Promise((resolve, reject) => {
        encryptMessage(message, secretKey, (message) => {
            resolve(message);
        })
    });

    expect(encryptData).toBeDefined();
});

it('should also just pass', async () => {
    const message = "Abu Hosain";
    const secretKey = "343q4324";
    const encryptedData = await encryptMessagePromise(message, secretKey);
    expect(encryptedData).toBeDefined();
})