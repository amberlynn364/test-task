import { observer } from 'mobx-react-lite';
import usePaginate from '../../../hooks/usePaginate';
import favoriteReposConainer from '../../../store/FavoriteReposContainer';
import Button from '../Button/Button';
import { PaginateProps } from './PaginateTypes';
import reposCounter from '../../../store/ReposCounter';
import styles from './Paginate.module.css';
import { FIRST_PAGE, ITEM_PER_PAGE } from '../../../constants';

const Paginate = observer(({ list }: PaginateProps) => {
  const { reposCount } = reposCounter;
  const { favoriteRepos } = favoriteReposConainer;
  const lastPage = list
    ? Math.ceil(reposCount / ITEM_PER_PAGE)
    : Math.ceil(favoriteRepos.length / ITEM_PER_PAGE);
  const { prevPage, currentPage, nextPage } = usePaginate();
  return (
    <div className={styles.PaginateWrapper}>
      <Button onClick={prevPage} disabled={currentPage === FIRST_PAGE}>
        Prev page
      </Button>
      <p>
        {currentPage}/{lastPage}
      </p>
      <Button onClick={nextPage} disabled={currentPage === lastPage}>
        Next page
      </Button>
    </div>
  );
});

export default Paginate;
