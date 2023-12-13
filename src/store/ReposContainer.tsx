import { action, makeObservable, observable } from 'mobx';
import { RepositoryData } from '../types';

class ReposContainter {
  repos: RepositoryData[] = [];

  constructor() {
    makeObservable(this, {
      repos: observable,
      setRepo: action,
    });
  }

  setRepo = (repo: RepositoryData[]) => {
    this.repos = repo;
  };

  get isReposEmpty() {
    return this.repos.length === 0;
  }
}

const reposContainer = new ReposContainter();

export default reposContainer;
