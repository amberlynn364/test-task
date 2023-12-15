import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import styles from './RepoCard.module.css';
import { RepoCardProps } from './RepoCardTypes';
import RouterPath from '../../router/routerTypes';
import favoriteReposConainer from '../../store/FavoriteReposContainer';

const RepoCard = observer(({ repo, defaultCard }: RepoCardProps) => {
  const {
    id,
    full_name,
    stargazers_count,
    forks_count,
    html_url,
    owner: { avatar_url, login },
  } = repo;

  const handleClick = () => favoriteReposConainer.addRepo(repo);

  const stopLinkEventPropagation = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => event.stopPropagation();

  return (
    <li
      className={defaultCard ? styles.cardWrapper : styles.favoriteCardWrapper}
      onClick={handleClick}
    >
      <div className={styles.cardGradient} />
      <div className={styles.cardInfo}>
        <img className={styles.cardImg} src={avatar_url} alt={login} />
        <a
          href={html_url}
          className={styles.cardName}
          target="_blank"
          rel="noreferrer"
          onClick={stopLinkEventPropagation}
        >
          {full_name}
        </a>
        <div className={styles.cardDescriptionWrapper}>
          <p className={styles.cardDescription}>
            Stars<span> {stargazers_count}</span>
          </p>
          <p className={styles.cardDescription}>
            Forks<span> {forks_count}</span>
          </p>
        </div>
        {defaultCard && (
          <Link
            to={`${RouterPath.RepositoryDetails}/${id}`}
            className={styles.learnMoreButton}
            onClick={stopLinkEventPropagation}
          >
            Learn more
          </Link>
        )}
      </div>
    </li>
  );
});

export default RepoCard;
