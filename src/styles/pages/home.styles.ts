import styled, { css } from 'styled-components';
import { Animations } from 'styles';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  min-height: calc(100vh - 6.5rem);
  background-color: ${({ theme }) => theme.colors.whiteDarker};
  padding: 1rem 8rem;

  @media (max-width: 960px) {
    padding: 1rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const HomeHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;

  h1 {
    display: flex;
    align-items: center;
    column-gap: 0.6rem;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    height: 80px;
    row-gap: 0.5rem;
  }
`;

export const HelpCasesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 1.2rem;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HelpCaseBlock = styled.article`
  animation: ${Animations.fadeFromLeft} 0.5s ease;
  background: ${p => p.theme.colors.white};
  box-shadow: 0 0 12px rgb(0 0 0 / 15%);
  border-radius: 12px;

  min-height: 260px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  color: ${({ theme }) => theme.colors.black};

  transition: all 0.2s ease;

  .title {
    font-size: 1.6rem;
    align-self: center;
    text-align: center;
    cursor: default;
  }

  .description {
    font-size: 1.1rem;
  }

  .details-button {
    margin-top: auto;
    padding: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.6rem;

    svg {
      font-size: 1.25rem;
      transition: all 0.2s ease;
    }

    &:hover svg {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 1280px) {
    h4 {
      font-size: 1.3rem;
    }
  }
`;

export const NothingFound = styled.div`
  width: 100%;
  margin-top: 3rem;

  p {
    text-align: center;
    font-size: 1.2rem;
  }
`;
