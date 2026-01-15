import { Button, Form, Input } from 'antd';
import { login } from '../../services/auth.service';
import { handleErrorMessage } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth.store';

function LoginPage() {
  const navigate = useNavigate();
  const {setTokens, setRefreshToken} = useAuthStore.getState();
  const handleFinish = async (values: any) => {
    try {
      const res = await login(values);
      setTokens(res.token);
      setRefreshToken(res.refreshToken);
      navigate('/');
    } catch (error) {
      handleErrorMessage(error);
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
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
