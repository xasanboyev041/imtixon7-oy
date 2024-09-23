import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/userSlice";
import { Form, Input, Button, notification } from "antd";
import "../styles/RegisterPage.css"


const RegisterPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    dispatch(registerUser(values))
      .then(() => {
        notification.success({ message: "User Registered Successfully" });
      })
      .catch(() => {
        notification.error({ message: "Registration Failed" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Register</h1>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="register-form"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Enter your email" className="input-field" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="input-field"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="register-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
