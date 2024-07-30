import CryptoJS from 'crypto-js';

const SecretKey = 'DRTNNGYD546365464JHU';

export const encrypt = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(data.toString(), SecretKey).toString();
  return encryptedData.replace(/\//g, ';');
};

export const decrypt = (encryptedData) => {
  encryptedData = encryptedData.replace(/;/g, '/');
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, SecretKey).toString(CryptoJS.enc.Utf8);
  return decryptedData;
};
