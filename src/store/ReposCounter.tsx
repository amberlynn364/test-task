import { action, makeObservable, observable } from 'mobx';

class ReposCounter {
  reposCount = 0;

  constructor() {
    makeObservable(this, {
      reposCount: observable,
      setReposCount: action,
    });
  }

  setReposCount = (value: number) => {
    this.reposCount = value;
  };
}

const reposCounter = new ReposCounter();

export default reposCounter;
