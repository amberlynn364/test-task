import { observer } from 'mobx-react-lite';
import reposContainer from '../../store/ReposContainer';
import favoriteReposConainer from '../../store/FavoriteReposContainer';
import RepoList from '../RepoList/RepoList';
import { RepoListTitle } from '../RepoList/RepoListTypes';
import styles from './ReposSection.module.css';
import reposCounter from '../../store/ReposCounter';
import { ITEM_PER_PAGE } from '../../constants';

const ReposSection = observer(() => {
  const { repos } = reposContainer;
  const { isFavoriteReposEmpty, favoriteRepos } = favoriteReposConainer;
  const { reposCount } = reposCounter;
  const isNeedPaginateForDefaultList = reposCount > ITEM_PER_PAGE;
  const isNeedPaginateForFavoriteList = favoriteRepos.length > ITEM_PER_PAGE;

  return (
    <section className={styles.repoListContainter}>
      {repos.length > 0 && (
        <RepoList
          repoList={repos}
          repoListTitle={RepoListTitle.DefaulList}
          isNeedPaginate={isNeedPaginateForDefaultList}
        />
      )}
      {!isFavoriteReposEmpty && (
        <RepoList
          repoList={favoriteRepos}
          repoListTitle={RepoListTitle.FavoritesList}
          isNeedPaginate={isNeedPaginateForFavoriteList}
        />
      )}
    </section>
  );
});

export default ReposSection;
