import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useModalsContext } from '@/hooks/useModals';
import { Employee } from '@/models';
import { ModalProps } from './types';
import styles from './modals.module.scss';

export const EmployeeModal: FC<ModalProps<Employee>> = ({ data, callback }) => {
  const { close } = useModalsContext();
  const [formData, setFormData] = useState(
    data ? data : { firstName: '', lastName: '', position: '' }
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { firstName, lastName, position } = formData;

    if (firstName && lastName && position) {
      callback(formData);
      close();
    }
  };

  return (
    <>
      <h3 className={styles.header}>{data ? 'Edit' : 'Add'} a employee</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="lastName">Second Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="position">Position</label>
          <input
            id="position"
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
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
