import { Link } from 'react-router-dom';
import { RepoDetailedCardProps } from './RepoDetailedCardTypes';
import styles from './RepoDetailedCard.module.css';
import RouterPath from '../../router/routerTypes';

export default function RepoDetailedCard({ repo }: RepoDetailedCardProps) {
  const {
    full_name,
    stargazers_count,
    forks_count,
    html_url,
    description,
    watchers,
    size,
    owner: { avatar_url, login },
  } = repo;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardGradient}>
        <Link to={RouterPath.Main} className={styles.linkToMainButton}>
          Back to Main
        </Link>
      </div>
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
          <p className={styles.cardDescription}>{description}</p>
          <p className={styles.cardNumbers}>
            Stars<span> {stargazers_count}</span>
          </p>
          <p className={styles.cardNumbers}>
            Forks<span> {forks_count}</span>
          </p>
          <p className={styles.cardNumbers}>
            Watchers<span> {watchers}</span>
          </p>
          <p className={styles.cardNumbers}>
            Size<span> {size}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
