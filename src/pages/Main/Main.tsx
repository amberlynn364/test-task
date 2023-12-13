import styles from './Main.module.css';
import SearchSection from '../../components/SearchSection/SearchSection';
import ReposSection from '../../components/ReposSection/ReposSection';

export default function Main() {
  return (
    <main className={styles.main}>
      <SearchSection />
      <ReposSection />
    </main>
  );
}
