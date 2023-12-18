import { useModalsContext } from '@/hooks/useModals';
import { DeleteModal } from '../components/modals/delete-modal';
import { EmployeeModal } from '../components/modals/employee-modal';
import { CompanyModal } from '../components/modals/company-modal';
import styles from './modals.module.scss';

const modals = {
  company_modal: CompanyModal,
  employee_modal: EmployeeModal,
  delete: DeleteModal,
};

type ModalKey = keyof typeof modals;

export const ModalWrapper = () => {
  const { isOpen, currentModal, close, data } = useModalsContext();

  if (!isOpen) {
    return <></>;
  }

  const Modal = modals[currentModal as ModalKey];

  if (!Modal) {
    return <></>;
  }

  return (
    <div className={`${styles.outer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.inner}>
        <span className={styles.cross} onClick={close} />
        <Modal {...data} />
      </div>
    </div>
  );
};
