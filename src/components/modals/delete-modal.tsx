import { FC } from 'react';
import { useModalsContext } from '@/hooks/useModals';
import styles from './modals.module.scss';

interface DeleteProps {
  selectedItems: number[];
  callback: () => void;
}

export const DeleteModal: FC<DeleteProps> = ({ selectedItems, callback }) => {
  const { close } = useModalsContext();

  const handleSubmit = () => {
    callback();
    close();
  };

  return (
    <>
      <h3 className={styles.header}>
        Delete {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''}?
      </h3>

      <div className={styles.buttons}>
        <button type="submit" onClick={handleSubmit}>
          Delete
        </button>
        <button type="button" onClick={close}>
          Cancel
        </button>
      </div>
    </>
  );
};
