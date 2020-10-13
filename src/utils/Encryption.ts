import AES from "crypto-js/aes";

const Encryption = async (token: string, text: string) => {
  const encryptedPassword = AES.encrypt(text, token).toString();
  return encryptedPassword;
};

export default Encryption
