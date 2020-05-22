import React from "react";
import { Router } from "react-router-dom";
import { Provider, observer } from "mobx-react";
import "moment/locale/zh-cn";
import Layout from "component/Layout";
import Loading from "component/Loading";
import "style/App.less";

@observer
class App extends React.Component {
  componentDidMount() {
    const {
      store: { app },
      history: { location },
    } = this.props;
    console.log(location);
    setTimeout(function () {
      app.setLoading(false);
    }, 1000);
  }
  render() {
    const { store, routes, history } = this.props;
    return store.app.loading ? (
      <Loading />
    ) : (
      <Provider store={store}>
        <Router history={history}>
          <Layout routes={routes} />
        </Router>
      </Provider>
    );
  }
}

export default App;
