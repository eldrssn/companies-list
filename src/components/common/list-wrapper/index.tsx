import { FC, ReactNode } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import styles from './list-wrapper.module.scss';

interface ListWrapperProps {
  children: ReactNode;
  headerFields: string[];
  title: string;
  handleAddItem: () => void;
  handleEditItem: () => void;
  handleDeleteItems: () => void;
  selectedItems: number[];
  handleSelectAll: () => void;
  isSelectAll: boolean;
  selectedCompanies?: number[];
  className?: string;
}

export const ListWrapper: FC<ListWrapperProps> = ({
  children,
  title,
  headerFields,
  handleAddItem,
  handleEditItem,
  handleDeleteItems,
  selectedItems,
  handleSelectAll,
  selectedCompanies,
  isSelectAll,
  className,
}) => {
  if (selectedCompanies) {
    if (selectedCompanies.length === 0) {
      return <p className={styles.info}>Choose a company</p>;
    }

    if (selectedCompanies.length > 1) {
      return <p className={styles.info}>You should choose only one company</p>;
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header_box}>
        <h2 className={styles.header}>{title}</h2>
        {selectedItems.length === 1 ? (
          <Button onClick={handleEditItem}>edit selected</Button>
        ) : (
          <></>
        )}

        {selectedItems.length > 0 ? (
          <Button action="warning" onClick={handleDeleteItems}>
            delete selected
          </Button>
        ) : (
          <Button onClick={handleAddItem}>add new employee</Button>
        )}
      </div>
      <ul className={`${styles.list} ${className ? className : ''}`}>
        <li className={styles.list_header}>
          <div>
            <Checkbox checked={isSelectAll} onChange={handleSelectAll} />
          </div>
          {headerFields.map((field, i) => (
            <div key={i}>{field}</div>
          ))}
        </li>
        {children}
      </ul>
    </div>
  );
};
