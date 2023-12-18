import { FC, memo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Company, Employee } from '@/models';
import styles from './item.module.scss';

interface ItemProps {
  item: Company | Employee;
  isChecked: boolean;
  onSelect: (id: number, isChecked: boolean) => void;
  fields: string[];
}

export const Item: FC<ItemProps> = memo(
  ({ item, isChecked, onSelect, fields }) => {
    const handleToggle = () => {
      onSelect(item.id, !isChecked);
    };

    return (
      <li key={item.id} className={`${isChecked ? styles.checked : ''}`}>
        <div>
          <Checkbox checked={isChecked} onChange={handleToggle} />
        </div>
        {fields.map((field, i) => (
          <div key={i}>{field}</div>
        ))}
      </li>
    );
  }
);
