import { observable, action } from "mobx";

class App {
  @observable loading = "shdjfshdj";
  @action
  setLoading = (v) => {
    this.loading = v;
  };
}

export default new App();
