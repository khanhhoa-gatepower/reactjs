import { Button as AntButton, type ButtonProps } from 'antd';

interface IButtonProps extends ButtonProps {
  noBorder?: boolean;
  children?: React.ReactNode;
}

function CommonButton({ className, noBorder, children, ...rest }: IButtonProps) {
  return (
    <AntButton
      className={`common-button ${className ?? ''} ${noBorder ? 'noBorder' : ''}`}
      {...rest}
    >
      {children}
    </AntButton>
  );
}

export default CommonButton;
