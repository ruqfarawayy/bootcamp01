import { useNavigate } from "react-router-dom";
import { useState } from "react";
import URLS from "@/src/enums/urls";
import { Card, Button, Checkbox, Form, Input } from "antd";
import ApiService from "@/src/services/clientBlog";

const { useForm } = Form;
const Login = () => {
  const navigate = useNavigate();
  const [dataInput, setDataInput] = useState({
    username: "",
    password: "",
  });
  const [form] = useForm();
  const datas = {
    username: "faruq",
    password: "123",
  };
  const handleDataInput = (e) => {
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const authLogin = () => {
  //   if (
  //     dataInput.username === datas.username &&
  //     dataInput.password === datas.password
  //   ) {
      
  //   } else {
  //     alert("heee lahhhh");
  //   }
  // };
  const onFinish = (values) => {
    const { username, password } = form.getFieldsValue();
    ApiService.request({
      method: "post",
      url: "auth/login",
      data: {
        username,
        password,
      },
    })
      .then((res) => {
        // console.log(res.data.data.token)
        localStorage.setItem("token", res.data.data.token);
      setTimeout(() => {
        navigate(URLS.PROFILE);
      }, 2000);
      })
      .catch((e) => {
        console.log(e);
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
      <h1>LOGIN</h1>

      <Card
        title="Masukkan data diri Anda"
        style={{
          width: 550,
        }}
      >
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       minHeight: "100vh",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <h2>Login</h2>
  //     <Form
  //       name="basic"
  //       labelCol={{
  //         span: 8,
  //       }}
  //       wrapperCol={{
  //         span: 16,
  //       }}
  //       initialValues={{
  //         remember: true,
  //       }}
  //       onFinish={onFinish}
  //       onFinishFailed={onFinishFailed}
  //       autoComplete="off"
  //     >
  //       <Form.Item
  //         label="Username"
  //         name="username"
  //         rules={[
  //           {
  //             required: true,
  //             message: "Please input your username!",
  //           },
  //         ]}
  //       >
  //         <Input />
  //       </Form.Item>

  //       <Form.Item
  //         label="Password"
  //         name="password"
  //         rules={[
  //           {
  //             required: true,
  //             message: "Please input your password!",
  //           },
  //         ]}
  //       >
  //         <Input.Password />
  //       </Form.Item>

  //       <Form.Item
  //         name="remember"
  //         valuePropName="checked"
  //         wrapperCol={{
  //           offset: 8,
  //           span: 16,
  //         }}
  //       >
  //         <Checkbox>Remember me</Checkbox>
  //       </Form.Item>

  //       <Form.Item
  //         wrapperCol={{
  //           offset: 8,
  //           span: 16,
  //         }}
  //       >
  //         <Button type="primary" htmlType="submit">
  //           Submit
  //         </Button>
  //       </Form.Item>
  //     </Form>
  //     {/* <h1>LOGIN</h1>
  //     <form>
  //       <label>Username : </label>
  //       <input
  //         type="text"
  //         name="username"
  //         value={dataInput.nama}
  //         onChange={handleDataInput}
  //       />
  //       <br />
  //       <label>Password : </label>
  //       <input
  //         type="password"
  //         name="password"
  //         value={dataInput.pwd}
  //         onChange={handleDataInput}
  //       />
  //       <br />
  //       <button onClick={authLogin}>login</button>
  //     </form> */}
  //   </div>
  // );
};

export default Login;
