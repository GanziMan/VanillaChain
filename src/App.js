import Component from "./core/Component.js";
// import CounterPage from "./pages/CounterPage.js";
import FetchPage from "./pages/FetchPage.js";

export default class App extends Component {
  template() {
    return `
      <main data-component="fetch-api"></main>
    `;
  }

  mounted() {
    const $fetchApp = this.$target.querySelector(
      '[data-component="fetch-api"]'
    );
    new FetchPage($fetchApp);
  }
}
