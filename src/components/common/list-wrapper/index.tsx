import { FC, ReactNode, useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import styles from './list-wrapper.module.scss';
import { Company, Employee } from '@/models';

interface ListWrapperProps {
  children: (props: { visibleItems: (Company | Employee)[] }) => ReactNode;
  headerFields: string[];
  title: string;
  handleAddItem: () => void;
  handleEditItem: () => void;
  handleDeleteItems: () => void;
  selectedItems: number[];
  handleSelectAll: () => void;
  isSelectAll: boolean;
  items: (Company | Employee)[];
  selectedCompanies?: number[];
  className?: string;
}

const STEP_COUNT = 10;

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
  items,
}) => {
  const [visibleItems, setVisibleItems] = useState<(Company | Employee)[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setVisibleItems(items.slice(0, 10));
  }, [items]);

  const handleLoadMore = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + STEP_COUNT);
    setVisibleItems((prevVisible) => [
      ...prevVisible,
      ...items.slice(startIndex + STEP_COUNT, startIndex + STEP_COUNT * 2),
    ]);
  };

  const isButtonShown =
    visibleItems.length < items.length && !!visibleItems.length;

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
        {children({ visibleItems })}

        {isButtonShown ? (
          <button onClick={handleLoadMore} className={styles.load_button}>
            Load More
          </button>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};
