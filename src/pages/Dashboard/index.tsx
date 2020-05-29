import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';
import logo from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite autor/nome do repositório.');
      return;
    }

    try {

      const response = await api.get<Repository>(`repos/${newRepository}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setInputError('');

    } catch (error) {
      setInputError('Repositório não encontrado.');
    }
  }

  return (
    <>
      <img src={logo} alt="github-explorer logo" />

      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>
                {repository.description}
              </p>
            </div>

            <FiChevronRight size={32} color="#aaaaaa" />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
