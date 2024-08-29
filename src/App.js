// APP 컴포넌트

import Component from "./core/Components";

export default class App extends Component {
  template() {
    return (
      <>
        <main data-component="counter-app"></main>
      </>
    );
  }

  mounted() {
    const $counterApp = this.$target.querySelector(
      '[data-component="counter-app"]'
    );
    new CounterPage($counterApp);
  }
}
