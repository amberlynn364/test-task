import { action, makeObservable, observable } from 'mobx';
import { RepositoryData } from '../types';

class FavoriteReposContainer {
  favoriteRepos: RepositoryData[] = [];

  constructor() {
    makeObservable(this, {
      favoriteRepos: observable,
      addRepo: action,
    });
  }

  addRepo = (repo: RepositoryData) => {
    const isRepoInRepos = this.favoriteRepos.some(
      (item) => item.id === repo.id
    );
    if (isRepoInRepos) return;
    this.favoriteRepos.push(repo);
  };

  get isFavoriteReposEmpty() {
    return this.favoriteRepos.length === 0;
  }
}

const favoriteReposConainer = new FavoriteReposContainer();

export default favoriteReposConainer;
