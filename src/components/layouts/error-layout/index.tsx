import { Outlet } from 'react-router-dom';
import styles from './index.module.css';

const ErrorLayout = () => {
  return (
    <div className={styles['wrapper']}>
      <main className={styles['container']}>
        hihi
        <Outlet />
      </main>
    </div>
  );
};

export default ErrorLayout;
