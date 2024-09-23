import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/userSlice";
import { Form, Input, Button, notification } from "antd";
import "../styles/CreateUserPage.css"

const CreateUserPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    dispatch(createUser(values))
      .then(() => {
        notification.success({ message: "User Created Successfully" });
      })
      .catch(() => {
        notification.error({ message: "Failed to Create User" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>Create User</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item
          name="job"
          label="Job"
          rules={[{ required: true, message: "Please enter your job!" }]}
        >
          <Input placeholder="Enter job" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUserPage;
