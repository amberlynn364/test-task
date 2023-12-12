import { RepositoryData } from '../../types';

export interface RepoListProps {
  repoList: RepositoryData[];
  repoListTitle: RepoListTitle.DefaulList | RepoListTitle.FavoritesList;
}

export enum RepoListTitle {
  DefaulList = 'List of repositories:',
  FavoritesList = 'List with favorites repositories:',
}
