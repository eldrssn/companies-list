import { ModalsContext } from '@/context/modals';
import { useContext } from 'react';

export const useModalsContext = () => {
  return useContext(ModalsContext);
};
