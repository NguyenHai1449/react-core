import { Outlet } from 'react-router-dom';
import styles from './index.module.css';

const DefaultLayout = () => {
  return (
    <div className={styles['wrapper']}>
      <main className={styles['container']}>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
