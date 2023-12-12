import { ChangeEvent, useEffect, useState } from 'react';
import fetchRepos from '../../services/fetchRepos';
import { RepositoryData } from '../../types';
import RepoList from '../../components/RepoList/RepoList';
import styles from './Main.module.css';
import { RepoListTitle } from '../../components/RepoList/RepoListTypes';

export default function Main() {
  const [searchValue, setSearchValue] = useState<string>('async-race');
  const [repoList, setRepoList] = useState<RepositoryData[] | null>(null);

  const handleUpdateSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    fetchRepos(searchValue, signal).then((data) => setRepoList(data.items));

    return () => abortController.abort();
  }, [searchValue]);
  return (
    <main className={styles.main}>
      <input type="text" onChange={handleUpdateSearchValue} />
      <div className={styles.repoListContainter}>
        {!repoList ? (
          <p>Loading...</p>
        ) : (
          <RepoList
            repoList={repoList}
            repoListTitle={RepoListTitle.DefaulList}
          />
        )}
        {!repoList ? (
          <p>Loading...</p>
        ) : (
          <RepoList
            repoList={repoList}
            repoListTitle={RepoListTitle.FavoritesList}
          />
        )}
      </div>
    </main>
  );
}
