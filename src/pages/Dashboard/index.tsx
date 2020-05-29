import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt='github-explorer logo' />

      <Title>Explore repositórios no Github</Title>

      <Form>
          <input type="text" placeholder="Digite o nome do repositório"/>
          <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img src='https://avatars3.githubusercontent.com/u/59883050?s=460&u=9297e05475d84763ecb291371d176d4b0c2989a9&v=4'
            alt='Profile picture'
          />
          <div>
            <strong>vinicius-david/Foodfy</strong>
            <p>O projeto Foodfy foi criado como desafio final do bootcamp LaunchBase. Foi utilizado NodeJS, PostgreSQL e Nunjucks</p>
          </div>

          <FiChevronRight size={32} color={"#aaaaaa"}/>
        </a>
        <a href="">
          <img src='https://avatars3.githubusercontent.com/u/59883050?s=460&u=9297e05475d84763ecb291371d176d4b0c2989a9&v=4'
            alt='Profile picture'
          />
          <div>
            <strong>vinicius-david/Foodfy</strong>
            <p>O projeto Foodfy foi criado como desafio final do bootcamp LaunchBase. Foi utilizado NodeJS, PostgreSQL e Nunjucks</p>
          </div>

          <FiChevronRight size={32} color={"#aaaaaa"}/>
        </a>
        <a href="">
          <img src='https://avatars3.githubusercontent.com/u/59883050?s=460&u=9297e05475d84763ecb291371d176d4b0c2989a9&v=4'
            alt='Profile picture'
          />
          <div>
            <strong>vinicius-david/Foodfy</strong>
            <p>O projeto Foodfy foi criado como desafio final do bootcamp LaunchBase. Foi utilizado NodeJS, PostgreSQL e Nunjucks</p>
          </div>

          <FiChevronRight size={32} color={"#aaaaaa"}/>
        </a>
        <a href="">
          <img src='https://avatars3.githubusercontent.com/u/59883050?s=460&u=9297e05475d84763ecb291371d176d4b0c2989a9&v=4'
            alt='Profile picture'
          />
          <div>
            <strong>vinicius-david/Foodfy</strong>
            <p>O projeto Foodfy foi criado como desafio final do bootcamp LaunchBase. Foi utilizado NodeJS, PostgreSQL e Nunjucks</p>
          </div>

          <FiChevronRight size={32} color={"#aaaaaa"}/>
        </a>
      </Repositories>
    </>
  )
};

export default Dashboard;
