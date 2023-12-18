import { FC, ReactNode, createContext, useState } from 'react';

interface SelectedCompaniesContextProps {
  selectedCompanies: number[];
  setSelectedCompanies: React.Dispatch<React.SetStateAction<number[]>>;
}

export const SelectedCompaniesContext =
  createContext<SelectedCompaniesContextProps>({
    selectedCompanies: [],
    setSelectedCompanies: () => [],
  });

export const SelectedCompaniesProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);

  return (
    <SelectedCompaniesContext.Provider
      value={{ selectedCompanies, setSelectedCompanies }}
    >
      {children}
    </SelectedCompaniesContext.Provider>
  );
};
