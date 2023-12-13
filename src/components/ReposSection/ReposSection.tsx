import { observer } from 'mobx-react-lite';
import reposContainer from '../../store/ReposContainer';
import favoriteReposConainer from '../../store/FavoriteReposContainer';
import RepoList from '../RepoList/RepoList';
import { RepoListTitle } from '../RepoList/RepoListTypes';
import styles from './ReposSection.module.css';

const ReposSection = observer(() => {
  const { repos } = reposContainer;
  const { isFavoriteReposEmpty, favoriteRepos } = favoriteReposConainer;
  return (
    <section className={styles.repoListContainter}>
      {repos.length > 0 && (
        <RepoList repoList={repos} repoListTitle={RepoListTitle.DefaulList} />
      )}
      {!isFavoriteReposEmpty && (
        <RepoList
          repoList={favoriteRepos}
          repoListTitle={RepoListTitle.FavoritesList}
        />
      )}
    </section>
  );
});

export default ReposSection;
