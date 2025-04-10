import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';
import styles from './TransactionsTable.module.css';

export const TransactionsTable = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={styles[transaction.type]}>
                {new Intl.NumberFormat('pt-PT', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-PT').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
