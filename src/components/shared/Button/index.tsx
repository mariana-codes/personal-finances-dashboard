import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {label}
    </button>
  );
};
