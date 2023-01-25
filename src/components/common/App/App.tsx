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
          <main className={styles.content}>
            <aside className={styles.aside}>
              <Sidebar />
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
};
