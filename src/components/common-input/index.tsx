import { Input, type InputProps } from 'antd';

function CommonInput({ className, ...rest }: InputProps) {
  return <Input className={`common-input ${className}`} {...rest} />;
}

export default CommonInput;
