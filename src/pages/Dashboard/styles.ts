import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;

  max-width: 450px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 64px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;

    height: 48px;
    padding: 0 16px;
    border: 0;
    border-radius: 4px 0 0 4px;

    color: #3a3a3a;

    &::placeholder {
      color: #bbbbbb;
    }

    &:focus {
      border: 1px solid green;
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

    strong {
      color: #333333;
    }

    p {
      color: #666666;
    }
  }
`;
