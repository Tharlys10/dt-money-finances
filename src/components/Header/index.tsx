import { MdBrightness7, MdBrightness2 } from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Icon } from './styles';

interface HeaderProps {
  mode: 'light' | 'dark';
  onOpenNewTransactionModal: () => void;
  handleMode: () => void;
}

export function Header({ onOpenNewTransactionModal, mode, handleMode }: HeaderProps) {
  function icon(): JSX.Element {
    if (mode === 'light') {
      return (
        <MdBrightness2 className="icon" size={25} color="#FFF" />
      );
    }

    return (
      <MdBrightness7 className="icon" size={25} color="#FFF" />
    );
  }

  return (
    <Container mode={mode}>
      <Icon>
        <button onClick={handleMode}>
          {
            icon()
          }
        </button>
      </Icon>
      <Content>
        <img src={logoImg} alt="DT Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}