import CryptoJS from "crypto-js";

// Callback-based encryption
export function encryptMessage(message, key, callBack) {
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  callBack(encryptedMessage);
}

// Promise-based encryption
export function encryptMessagePromise(message, key) {
  return new Promise((resolve, reject) => {
    try {
      const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
      resolve(encryptedMessage);
    } catch (error) {
      reject(new Error('Failed to encrypt message'));
    }
  });
}

// const message = {
//     name : "Abu Hosain",
//     password : "123465"
// }

// const secretKey = "sdkfsdnfjsdfnjsdkfsdlsdSDFSDF";

// encryptMessage(JSON.stringify(message), secretKey, (encryptMessage) => {
//     console.log(encryptMessage)
// });

// encryptMessagePromise(JSON.stringify(message), secretKey).then(
//     (encryptMessage) => console.log(encryptMessage)
// )