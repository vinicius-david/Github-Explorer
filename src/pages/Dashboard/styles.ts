import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  max-width: 450px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 64px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;

    height: 48px;
    padding: 0 16px;
    border: 1px solid white;
    border-right: 0;
    border-radius: 4px 0 0 4px;

    color: #3a3a3a;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #bbbbbb;
    }

    &:focus {
      border-color: green;
    }
  }

  button {
    background-color: #22dd22;
    color: #222222;
    font-weight: bold;

    width: 210px;
    border: 0;
    border-radius: 0 4px 4px 0;

    transition: 200ms;

    &:hover {
      background-color: ${shade(0.4, '#00cc00')};
      color: white;
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;

  color: #c53030;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background-color: white;
    padding: 16px 16px;
    border-radius: 8px;

    display: flex;
    align-items: center;

    text-decoration: none;

    transition: 200ms;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      background-color: #dddddd;
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      margin-right: 16px;

      border-radius: 50%;
    }

    div {
      flex: 1;

      strong {
        color: #333333;
      }

      p {
        color: #666666;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
