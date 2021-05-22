import styled from 'styled-components';

interface HeaderProps {
  mode: 'light' | 'dark'
}

export const Container = styled.header<HeaderProps>`
  background: ${(props) => props.mode === 'light' ? 'var(--blue)' : '#000'};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1.5rem 3rem 0rem 0rem;

  button {
    background: transparent;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;