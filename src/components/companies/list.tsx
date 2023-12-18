import { useEffect, useState } from 'react';

import { selectCompanies } from '@/store/companies/selectors';
import { addEmployees, resetEmployees } from '@/store/employees/employeesSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addCompany,
  deleteCompanies,
  editCompany,
} from '@/store/companies/companiesSlice';
import { useSelectedCompanies } from '@/hooks/useSelectedCompanies';
import { useModalsContext } from '@/hooks/useModals';
import { Company } from '@/models';

import { Item } from '../common/item';
import { ListWrapper } from '../common/list-wrapper';
import styles from './list.module.scss';

export const CompaniesList = () => {
  const modal = useModalsContext();
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompanies);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const { selectedCompanies, setSelectedCompanies } = useSelectedCompanies();

  const handleSelectAll = () => {
    setIsSelectAll((selectAll) => !selectAll);
    setSelectedCompanies((prev) =>
      prev.length === companies.length
        ? []
        : companies.map((company) => company.id)
    );
  };

  const handleSelectItem = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedCompanies((prev) => [...prev, id]);
    } else {
      setSelectedCompanies((prev) => prev.filter((itemId) => itemId !== id));
    }
    setIsSelectAll(false);
  };

  const handleDeleteSelected = () => {
    modal.open('delete', {
      selectedItems: selectedCompanies,
      callback: () => {
        dispatch(deleteCompanies(selectedCompanies));
        setSelectedCompanies([]);
        setIsSelectAll(false);
      },
    });
  };

  const handleAddCompany = () => {
    modal.open('company_modal', {
      callback: (newCompany: Partial<Company>) => {
        dispatch(addCompany(newCompany));
      },
    });
  };

  const handleEditCompany = () => {
    if (selectCompanies.length !== 1) {
      return;
    }

    modal.open('company_modal', {
      data: companies.find((company) => company.id === selectedCompanies[0]),
      callback: (newCompany: Record<string, string>) => {
        dispatch(editCompany({ id: selectedCompanies[0], ...newCompany }));
      },
    });
  };

  useEffect(() => {
    if (selectedCompanies.length > 1 || selectedCompanies.length === 0) {
      dispatch(resetEmployees());
      return;
    }

    dispatch(
      addEmployees(
        companies[
          companies.findIndex((item) => item.id === selectedCompanies[0])
        ].employees
      )
    );
  }, [selectedCompanies.length, dispatch, selectedCompanies, companies]);

  return (
    <ListWrapper
      title="Companies"
      headerFields={['Name', 'Size', 'Address']}
      handleAddItem={handleAddCompany}
      handleEditItem={handleEditCompany}
      handleDeleteItems={handleDeleteSelected}
      selectedItems={selectedCompanies}
      handleSelectAll={handleSelectAll}
      isSelectAll={isSelectAll}
      className={styles.list}
    >
      {companies.map((company) => (
        <Item
          item={company}
          key={company.id}
          isChecked={isSelectAll || selectedCompanies.includes(company.id)}
          onSelect={handleSelectItem}
          fields={[
            company.name,
            company.employees.length.toString(),
            company.address,
          ]}
        />
      ))}
    </ListWrapper>
  );
};
