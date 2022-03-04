import { Form, Input, Button } from "antd";
import {loginAdmin} from '../../redux/modules/admin/action'

import { useState } from "react";
import { useDispatch } from "react-redux";

function FormLogin() {
  

  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");

  const userAdmin = {
    username: username,
    passwd: passwd
  }

  const dispatch = useDispatch();
  
  const hanleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswdChange = (e) => {
    setPasswd(e.target.value);
  };

  const handleButtonSubmit = (e) => {
    dispatch(loginAdmin(username))
  };
  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={hanleUsernameChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={handlePasswdChange} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button onClick={handleButtonSubmit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default FormLogin;
