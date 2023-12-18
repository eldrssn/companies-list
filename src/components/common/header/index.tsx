import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header_box}>
      <h1 className={styles.header}>Management of companies and employees</h1>
    </header>
  );
};
