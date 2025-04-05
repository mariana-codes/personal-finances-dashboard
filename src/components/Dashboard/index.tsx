import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  return (
    <main className={styles.container}>
      <Summary />
      <TransactionsTable />
    </main>
  );
};
