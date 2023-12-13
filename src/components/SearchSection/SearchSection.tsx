import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import TextField from '../View/TextField/TextField';
import ClipBoard from '../ClipBoard/ClipBoard';
import reposContainer from '../../store/ReposContainer';
import fetchRepos from '../../services/fetchRepos';
import useThrottledCallback from '../../hooks/useThrottledCallback';

const SearchSection = observer(() => {
  const [searchValue, setSearchValue] = useState('');
  const { setRepo } = reposContainer;

  const handleUpdateSearchValue = useThrottledCallback(
    (value: string): void => {
      setSearchValue(value);
    },
    300
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    fetchRepos(searchValue, signal).then((data) => {
      if (data) setRepo(data.items);
    });

    return () => abortController.abort();
  }, [searchValue, setRepo]);
  return (
    <section>
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
