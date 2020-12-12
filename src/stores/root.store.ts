import { makeAutoObservable } from "mobx";

class RootStore {
  member;

  constructor() {
    makeAutoObservable(this);
  }

  hydrate(data: any) {
    if (!data) return;
    this.member = data;
  }
}

export default RootStore;
