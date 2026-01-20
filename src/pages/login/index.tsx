import { Button, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service';
import { useAuthStore } from '../../stores/auth.store';
import { handleErrorMessage } from '../../utils/utils';
import CommonInput from '../../components/common-input';

function LoginPage() {
  const navigate = useNavigate();
  const { setTokens, setRefreshToken } = useAuthStore.getState();
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
    <div className="max-w-[320px] mx-auto">
      <h1 className="text-[#323232] text-[23px] font-poppins font-semibold mb-2">Sign In</h1>
      <Form onFinish={handleFinish} className="login-form" layout="vertical">
        <Form.Item label="Username" name="email">
          <CommonInput className="border-none" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <CommonInput type="password" className="border-none" />
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
