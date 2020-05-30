import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #666666;

    transition: 200ms;

    &:hover {
      color: #222222;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 100px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 128px;
      height: 128px;

      border-radius: 50%;
      margin-right: 64px;
    }

    strong {
      font-size: 36px;
      color: #222222;
    }

    p {
      font-size: 24px;
      color: #555555;

      margin-top: 16px;
    }
  }

  ul {
    list-style: none;

    display: flex;

    margin-top: 60px;

    li {
      display: flex;
      flex-direction: column;

      & + li {
        margin-left: 80px;
      }

      strong {
        font-size: 32px;
        color: #222222;
      }

      span {
        font-size: 24px;
        color: #555555;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
