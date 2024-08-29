import Component from "../core/Components";

export default class Counter extends Component {
  setup() {
    // default
    this.$state = {
      counter: 0,
    };
  }

  template() {
    const { coutner } = this$.$state;
    return (
      <div>
        <h2>Counter Component</h2>
        <div>${counter}</div>
        <button class="up">증가</button>
        <button class="down">감소</button>
      </div>
    );
  }

  setEvent() {
    this.addEvent("click", ".up", ({ target }) => {
      const prev = this.$state.counter;
      this.up(prev);
    });

    this.addEvent("click", ".down", ({ target }) => {
      const next = this.$state.counter;
      this.up(next);
    });
  }

  up(prev) {
    this.setState({ counter: prev + 1 });
  }
  down(prev) {
    this.setState({ counter: prev - 1 });
  }
}
