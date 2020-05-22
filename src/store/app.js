import { observable, action } from "mobx";

class App {
  @observable loading = true;
  @action
  setLoading = (v) => {
    this.loading = v;
  };
}

export default new App();
