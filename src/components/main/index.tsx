import { SelectedCompaniesProvider } from '@/context/company';
import { ModalsProvider } from '@/context/modals';
import { ModalWrapper } from '@/controllers/modals';

import { CompaniesList } from '../companies/list';
import { EmployeersList } from '../employees/list';
import styles from './main.module.scss';

export const Main = () => {
  return (
    <ModalsProvider>
      <SelectedCompaniesProvider>
        <main className={styles.main}>
          <CompaniesList />
          <EmployeersList />
          <ModalWrapper />
        </main>
      </SelectedCompaniesProvider>
    </ModalsProvider>
  );
};
