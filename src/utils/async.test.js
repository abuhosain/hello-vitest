import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from "vitest";
import CryptoJS from "crypto-js";
import { encryptMessage, encryptMessagePromise } from "../async";


// for initial setup
beforeAll(() => {
    console.log('Befor all')
});

beforeEach(() => {
    console.log("Befor each")
});

afterAll(() => {
    console.log("After all")
});

afterEach(() => {
    console.log('after each test')
});




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
});


it('should encrypt the message correctly', async () => {
    const message = "Abu Hosain";
    const key = "343q4324";
    const encryptedData = await encryptMessagePromise(message, key);
    expect(encryptedData).toBeDefined();
    const decryptedMessage = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
    expect(decryptedMessage).toBe(message);
});
