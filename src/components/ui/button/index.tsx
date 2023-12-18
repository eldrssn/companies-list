import { FC, ReactNode } from 'react';
import styles from './button.module.scss';

export interface ButtonProps {
  onClick?: () => void;
  action?: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, action, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles.button} ${
      action === 'warning' ? styles.button_warning : ''
    }`}
  >
    {children}
  </button>
);
