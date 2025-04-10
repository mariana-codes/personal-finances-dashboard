import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react';

import { useTransactions } from '../../hooks/useTransactions';
import { Card } from '../shared/Card';
import styles from './Summary.module.css';

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <div className={styles.container}>
      <Card
        balance={new Intl.NumberFormat('pt-PT', {
          style: 'currency',
          currency: 'EUR',
        }).format(summary.deposits)}
        headerTitle="Entradas"
        icon={<ArrowCircleUp color="var(--green-light)" size={32} />}
      />
      <Card
        balance={new Intl.NumberFormat('pt-PT', {
          style: 'currency',
          currency: 'EUR',
        }).format(summary.withdraws)}
        headerTitle="Saídas"
        icon={<ArrowCircleDown color="var(--red)" size={32} />}
      />
      <Card
        balance={new Intl.NumberFormat('pt-PT', {
          style: 'currency',
          currency: 'EUR',
        }).format(summary.total)}
        alternativeColor
        headerTitle="Total"
        icon={<CurrencyDollar color="var(--white)" size={32} />}
      />
    </div>
  );
};
