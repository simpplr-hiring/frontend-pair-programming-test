import logo from '../../../assets/icons/simpplr.svg';

import styles from './App.module.css';

export const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <img
          src={logo}
          className={styles.logo}
          alt="logo"
          data-testid="simpplr-logo"
        />
      </header>
      <main className={styles.content} />
    </div>
  );
};
