import { useNavigate } from "react-router-dom";
import { useState } from "react";
import URLS from "@/src/enums/urls";
import ApiService from "@/src/services/clientBlog";
import { Button, Card, Form, Input, Checkbox, message } from "antd";

const { useForm } = Form;
const Register = () => {
  const [form] = useForm();
  const [load,setLoad] = useState(false);
  const onFinish = (values) => {
    setLoad(true);
    const { name, username, password } = form.getFieldsValue();
    ApiService.request({
      method: "post",
      url: "auth/register",
      data: {
        name,
        username,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        message.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        if ([400].includes(err.response.status)) {
          message.error(
            <ul>
              {err.response.data.message.map(({ param, msg }, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          );
        } else {
          message.error(err.response.data.message);
        }
      })
      .finally(() => {
        setLoad(false);
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>REGISTER</h1>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button loading={load} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
