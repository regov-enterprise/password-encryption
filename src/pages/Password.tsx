import { Button, Form, Input } from "antd";
import React, { useState } from "react";

import { Encryption } from "../utils";

const Password = () => {
  const [EncryptionedPassword, setEncryptionedPassword] = useState("");
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const password = await Encryption("token", values.password);
    setEncryptionedPassword(password);
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
        <Form.Item label="Session Token" name="username" rules={[{ required: true, message: "Please input your session token!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>
        {EncryptionedPassword && <p>Encrypted Password: {EncryptionedPassword}</p>}
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
