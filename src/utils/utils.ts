import { message } from "antd";

export const handleErrorMessage = (error: any) => {
  message.destroy();
  message.error(getErrorMessage(error));
};

export const getErrorMessage = (error: any) => {
  return error?.message || error?.errors?.message || error?.errors?.file || 'Something went wrong!';
};