import { Link } from 'react-router-dom';
import styles from './RepoCard.module.css';
import { RepoCardProps } from './RepoCardProps';
import RouterPath from '../../router/routerTypes';

export default function RepoCard({ repo, defaultCard }: RepoCardProps) {
  const {
    full_name,
    stargazers_count,
    forks_count,
    html_url,
    owner: { avatar_url, login },
  } = repo;
  return (
    <li
      className={defaultCard ? styles.cardWrapper : styles.favoriteCardWrapper}
    >
      <div className={styles.cardGradient} />
      <div className={styles.cardInfo}>
        <img className={styles.cardImg} src={avatar_url} alt={login} />
        <a
          href={html_url}
          className={styles.cardName}
          target="_blank"
          rel="noreferrer"
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
          <Link to={`${RouterPath.RepositoryDetails}/${repo.id}`}>
            Learn more
          </Link>
        )}
      </div>
    </li>
  );
}
