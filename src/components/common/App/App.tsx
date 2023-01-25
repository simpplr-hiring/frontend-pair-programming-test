import logo from '../../../assets/icons/simpplr.svg';
import { Sidebar } from '../Sidebar';

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

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Frontend pair programming test</h1>

          <div className={styles.content}>
            <aside className={styles.aside}>
              <Sidebar />
            </aside>
            <main>
              <p className={styles.text}>Good luck!</p>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
