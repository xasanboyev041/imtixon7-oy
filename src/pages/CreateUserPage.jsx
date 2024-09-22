import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/userSlice";
import { Form, Input, Button, notification } from "antd";

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
    <div className="container mx-auto my-10 p-5 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-center mb-5">Create User</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input
            placeholder="Enter name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>
        <Form.Item name="job" label="Job" rules={[{ required: true }]}>
          <Input
            placeholder="Enter job"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
          >
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUserPage;
