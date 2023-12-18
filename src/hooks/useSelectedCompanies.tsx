import { useContext } from 'react';
import { SelectedCompaniesContext } from '@/context/company';

export const useSelectedCompanies = () => {
  return useContext(SelectedCompaniesContext);
};
