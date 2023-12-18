import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectEmployees } from '@/store/employees/selectors';
import { useSelectedCompanies } from '@/hooks/useSelectedCompanies';
import { useAppDispatch } from '@/store/hooks';
import {
  addEmployeeInCompany,
  deleteEmployeesFromCompany,
  editEmployeeInCompany,
} from '@/store/companies/companiesSlice';
import {
  addEmployee,
  deleteEmployeers,
  editEmployee,
} from '@/store/employees/employeesSlice';
import { useModalsContext } from '@/hooks/useModals';
import { Employee } from '@/models';

import { Item } from '../common/item';
import { ListWrapper } from '../common/list-wrapper';
import styles from './list.module.scss';

export const EmployeersList = () => {
  const dispatch = useAppDispatch();
  const modal = useModalsContext();
  const employees = useSelector(selectEmployees);
  const { selectedCompanies } = useSelectedCompanies();

  const [isSelectAll, setIsSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelectAll = () => {
    setIsSelectAll((selectAll) => !selectAll);
    setSelectedItems((prev) =>
      prev.length === employees.length ? [] : employees.map((item) => item.id)
    );
  };

  const handleSelectItem = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, id]);
    } else {
      setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
    }
    setIsSelectAll(false);
  };

  const handleDeleteSelected = () => {
    modal.open('delete', {
      selectedItems,
      callback: () => {
        dispatch(
          deleteEmployeesFromCompany({
            companyId: selectedCompanies[0],
            employeeIds: selectedItems,
          })
        );
        dispatch(deleteEmployeers(selectedItems));
        setSelectedItems([]);
        setIsSelectAll(false);
      },
    });
  };

  const handleEditEmployee = () => {
    modal.open('employee_modal', {
      data: employees.find((employee) => employee.id === selectedItems[0]),
      callback: (newData: Partial<Employee>) => {
        dispatch(editEmployee({ id: selectedItems[0], ...newData }));
        dispatch(
          editEmployeeInCompany({
            companyId: selectedCompanies[0],
            newData: { id: selectedItems[0], ...newData },
          })
        );
      },
    });
  };

  const handleAddEmployee = () => {
    modal.open('employee_modal', {
      callback: (newData: Partial<Employee>) => {
        dispatch(addEmployee(newData));
        dispatch(
          addEmployeeInCompany({
            companyId: selectedCompanies[0],
            newData,
          })
        );
      },
    });
  };

  if (selectedCompanies.length === 0) {
    return <p className={styles.info}>Choose a company</p>;
  }

  if (selectedCompanies.length > 1) {
    return <p className={styles.info}>You should choose only one company</p>;
  }

  return (
    <ListWrapper
      title="Employeers"
      headerFields={['Firstname', 'Lastname', 'Position']}
      handleAddItem={handleAddEmployee}
      handleEditItem={handleEditEmployee}
      handleDeleteItems={handleDeleteSelected}
      selectedItems={selectedItems}
      selectedCompanies={selectedCompanies}
      handleSelectAll={handleSelectAll}
      isSelectAll={isSelectAll}
      items={employees}
    >
      {({ visibleItems }) => (
        <>
          {visibleItems.map((employee) => (
            <Item
              item={employee}
              key={employee.id}
              isChecked={isSelectAll || selectedItems.includes(employee.id)}
              onSelect={handleSelectItem}
              fields={[
                (employee as Employee).firstName,
                (employee as Employee).lastName,
                (employee as Employee).position,
              ]}
            />
          ))}

          {!employees.length ? <p>No employeers</p> : <></>}
        </>
      )}
    </ListWrapper>
  );
};
