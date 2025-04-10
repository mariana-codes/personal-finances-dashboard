import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react';
import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';
import { Card } from '../shared/Card';
import styles from './Summary.module.css';

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  console.log('transactions', transactions);

  return (
    <div className={styles.container}>
      <Card
        balance={1000}
        headerTitle="Entradas"
        icon={<ArrowCircleUp color="var(--green-light)" size={32} />}
      />
      <Card
        balance={700}
        headerTitle="Saídas"
        icon={<ArrowCircleDown color="var(--red)" size={32} />}
      />
      <Card
        balance={300}
        alternativeColor
        headerTitle="Total"
        icon={<CurrencyDollar color="var(--white)" size={32} />}
      />
    </div>
  );
};
