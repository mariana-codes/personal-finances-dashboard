import { ReactNode } from 'react';

import styles from './Card.module.css';

interface CardProps {
  headerTitle: string;
  icon: ReactNode;
  balance: number;
  alternativeColor?: boolean;
}

export const Card = ({ balance, headerTitle, icon, alternativeColor }: CardProps) => {
  return (
    <div className={`${styles.container} ${alternativeColor && styles.alternative}`}>
      <header className={styles.header}>
        <span>{headerTitle}</span>
        <span>{icon}</span>
      </header>
      <strong>€ {balance}</strong>
    </div>
  );
};
