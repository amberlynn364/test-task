import { RepoListProps, RepoListTitle } from './RepoListTypes';
import styles from './RepoList.module.css';
import RepoCard from '../RepoCard/RepoCard';
import Paginate from '../View/Paginate/Paginate';

export default function RepoList({
  repoList,
  repoListTitle,
  isNeedPaginate,
}: RepoListProps) {
  const isDefaultList = repoListTitle === RepoListTitle.DefaulList;
  return (
    <div className={styles.repoListWrapper}>
      <h2 className={styles.repoListTitle}>{repoListTitle}</h2>
      <ul className={styles.repoCardsWrapper}>
        {repoList.map((repo) => (
          <RepoCard key={repo.id} repo={repo} defaultCard={isDefaultList} />
        ))}
      </ul>
      {isNeedPaginate && <Paginate list={isDefaultList} />}
    </div>
  );
}
