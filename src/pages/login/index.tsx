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
      <h1 className="text-[#323232] text-[23px] font-poppins font-semibold mb-[33px]">Sign In</h1>
      <Form onFinish={handleFinish} layout="vertical">
        <Form.Item
          label="Username"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
          className="[&_label]:font-poppins [&_label]:!text-[#929292] [&_label]:letter-spacing-0"
        >
          <CommonInput className="border-0 border-b-[1px] border-b-[#BFBFBF] rounded-none p-0" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          className="[&_label]:font-poppins [&_label]:!text-[#929292] [&_label]:letter-spacing-0"
        >
          <CommonInput
            type="password"
            className="border-0 border-b-[1px] border-b-[#BFBFBF] rounded-none p-0"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-white bg-[#A0A0A0] px-[71px] py-[11px] w-full rounded-1 font-bold h-[45px] my-[25px] hover:!bg-[#A0A0A0]"
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
