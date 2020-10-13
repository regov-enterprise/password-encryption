var CryptoJS = require("crypto-js");
 

const Decryption = async (token: string, text: string) => {
  const bytes  = CryptoJS.AES.decrypt(text, token);
const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};

export default Decryption