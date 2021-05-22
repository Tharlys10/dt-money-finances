import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { TransactionsProvider } from './components/hooks/useTransactions';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement("#root");

export function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mode = localStorage.getItem('@dt-money-finances/mode');

    setMode(mode === 'light' ? 'light' : 'dark');
  }, []);

  function handleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');

    localStorage.setItem('@dt-money-finances/mode', mode === 'light' ? 'dark' : 'light');
  }

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} mode={mode} handleMode={handleMode} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle mode={mode} />
    </TransactionsProvider >
  );
}
