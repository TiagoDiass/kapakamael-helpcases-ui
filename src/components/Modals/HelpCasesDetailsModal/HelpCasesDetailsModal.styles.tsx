import styled, { css } from 'styled-components';

export const ModalContentContainer = styled.div`
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    img {
      width: 350px;
    }

    h3 {
      text-align: center;
    }

    p {
      font-size: 1.05rem;
    }
  }

  .button {
    padding: 1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  .whatsapp-link {
    color: white;
    background-color: #19bd57;

    &:hover {
      background-color: #0f9743;
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;

export const HelpCasePictures = styled.div<{ picturesAmount: number }>`
  img {
    height: 400px;
    border-radius: 20px;
  }

  ${p =>
    p.picturesAmount === 2 &&
    css`
      display: flex;
      column-gap: 1rem;
    `}
`;
