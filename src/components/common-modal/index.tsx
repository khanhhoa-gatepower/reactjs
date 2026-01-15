import { Modal, type ModalProps } from 'antd';
import CloseIcon from '../../assets/icons/closeIcon';

function CommonModal({ className, children, ...rest }: ModalProps) {
  return (
    <Modal closeIcon={<CloseIcon />} centered className={`modal-base ${className ?? ''}`} {...rest}>
      {children}
    </Modal>
  );
}

export default CommonModal;
