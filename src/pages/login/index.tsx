import { Button, Form, Input } from "antd";
import { login } from "../../services/auth.service";

function LoginPage() {
  const handleFinish = async (values: any) => {
    console.log("Received values:", values);
    try {
      const res = await login(values);
      console.log("Login successful:", res);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Form onFinish={handleFinish}>
        <Form.Item label="email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
