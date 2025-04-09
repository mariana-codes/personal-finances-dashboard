import FavIcon from '../../assets/favicon.svg';
import { Button } from '../shared/Button';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        {/* TODO: CREATE LOGO */}
        <img src={FavIcon} alt="personal finance dashboard" />
        <Button label="Nova transacção" onClick={onOpenNewTransactionModal} />
      </div>
    </header>
  );
};
