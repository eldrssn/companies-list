/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode, createContext, useState } from 'react';

interface ModalsContextProps {
  open: (name: string, data?: any) => void;
  close: () => void;
  isOpen: boolean;
  currentModal: string;
  data: any;
}

export const ModalsContext = createContext<ModalsContextProps>({
  open: () => undefined,
  close: () => undefined,
  isOpen: false,
  currentModal: '',
  data: {},
});

export const ModalsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState('');
  const [data, setData] = useState<any>({});

  const store = {
    open: (name: string, data: any) => {
      setIsOpen(true);
      setCurrentModal(name);
      setData(data);
    },

    close: () => {
      setIsOpen(false);
      setCurrentModal('');
      setData({});
    },
    isOpen,
    currentModal,
    data,
  };

  return (
    <ModalsContext.Provider value={store}>{children}</ModalsContext.Provider>
  );
};
