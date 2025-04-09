import { useEffect } from 'react';

import { api } from '../../services/api';
import styles from './TransactionsTable.module.css';

export const TransactionsTable = () => {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

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
          <tr>
            <td>Edição de vídeo</td>
            <td className={styles.deposit}>€ 500</td>
            <td>Freelance</td>
            <td>20/02/2025</td>
          </tr>
          <tr>
            <td>Renda</td>
            <td className={styles.withdraw}>- € 1.000</td>
            <td>Casa</td>
            <td>20/02/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
