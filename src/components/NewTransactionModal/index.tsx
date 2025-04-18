import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';
import { Button } from '../shared/Button';
import styles from './NewTransactionModal.module.css';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <button type="button" className={'react-modal-close'} onClick={onRequestClose}>
        <X size={24} color="var(--gray5)" />
      </button>
      <form onSubmit={handleCreateNewTransaction} className={styles.container}>
        <h2>Registar transacção</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          min={0}
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <div className={styles['transaction-type-container']}>
          <button
            type="button"
            className={styles[type == 'deposit' ? 'deposit-active' : '']}
            onClick={() => setType('deposit')}
          >
            <ArrowCircleUp
              color={type == 'deposit' ? 'var(--white)' : 'var(--green-light)'}
              size={24}
            />
            <span>Entrada</span>
          </button>
          <button
            type="button"
            className={styles[type == 'withdraw' ? 'withdraw-active' : '']}
            onClick={() => setType('withdraw')}
          >
            <ArrowCircleDown color={type == 'withdraw' ? 'var(--white)' : 'var(--red)'} size={24} />
            <span>Saída</span>
          </button>
        </div>

        <Button label="Registar" type="submit" />
      </form>
    </Modal>
  );
};
