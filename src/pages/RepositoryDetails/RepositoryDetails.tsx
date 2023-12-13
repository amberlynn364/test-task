import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import reposContainer from '../../store/ReposContainer';
import { RepositoryData } from '../../types';
import RepoDetailedCard from '../../components/RepoDetailedCard/RepoDetailedCard';

export default function RepositoryDetails() {
  const { id } = useParams();
  const { repos } = reposContainer;
  const [repo, setRepo] = useState<RepositoryData | null>(null);
  useEffect(() => {
    const data = repos.find((item) => item.id === Number(id));
    if (data) setRepo(data);
  }, [id, repos]);
  if (!repo) return <p>Loading...</p>;
  return <RepoDetailedCard repo={repo} />;
}
