import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import TextField from '../View/TextField/TextField';
import ClipBoard from '../ClipBoard/ClipBoard';
import reposContainer from '../../store/ReposContainer';
import fetchRepos from '../../services/fetchRepos';
import useThrottledCallback from '../../hooks/useThrottledCallback';
import reposCounter from '../../store/ReposCounter';
import styles from './SearchSection.module.css';

const SearchSection = observer(() => {
  const [searchValue, setSearchValue] = useState('');
  const { setRepo } = reposContainer;
  const { setReposCount } = reposCounter;
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';

  const handleUpdateSearchValue = useThrottledCallback(
    (value: string): void => {
      setSearchValue(value);
    },
    300
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    fetchRepos(searchValue, currentPage, signal).then((data) => {
      if (data) {
        setRepo(data.items);
        setReposCount(data.total_count);
      }
    });

    return () => abortController.abort();
  }, [searchValue, setRepo, currentPage, setReposCount]);
  return (
    <section className={styles.searchSection}>
      <TextField
        label="Search Input"
        name="searchInput"
        type="text"
        onChange={handleUpdateSearchValue}
        placeholder="Enter repo name"
      />
      <ClipBoard text={searchValue} />
    </section>
  );
});

export default SearchSection;
