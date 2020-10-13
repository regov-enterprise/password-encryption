import { Button, Form, Input } from "antd";
import React, { useState } from "react";

import { Decryption, Encryption } from "../utils";

const Password = () => {
  const [encryptedPassword, setEncryptedPassword] = useState("");
  const [decryptedPassword, setDecryptedPassword] = useState("");
  const onFinish = async (values: any) => {
    const password = await Encryption(values.token, values.password);
    const rawPassword = await Decryption(values.token, password);
    setEncryptedPassword(password);
    setDecryptedPassword(rawPassword);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        paddingTop: 80,
      }}>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Session Token" name="token" rules={[{ required: true, message: "Please input your session token!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>
        {encryptedPassword && <p>Encrypted Password: {encryptedPassword}</p>}
        {decryptedPassword && <p>Decrypted Password: {decryptedPassword}</p>}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Password;
