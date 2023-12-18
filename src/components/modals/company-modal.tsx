import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useModalsContext } from '@/hooks/useModals';
import { Company } from '@/models';
import { ModalProps } from './types';
import styles from './modals.module.scss';

export const CompanyModal: FC<ModalProps<Company>> = ({ data, callback }) => {
  const { close } = useModalsContext();
  const [formData, setFormData] = useState(
    data ? data : { name: '', address: '' }
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, address } = formData;

    if (name && address) {
      callback(formData);
      close();
    }
  };

  return (
    <>
      <h3 className={styles.header}>{data ? 'Edit' : 'Add'} a company</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.buttons}>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </>
  );
};
