import Component from "../core/Component";

export default class List extends Component {
  template() {
    const { dummyList } = this.$props;
    return `
        <ul>
          test
        </ul>
      `;
  }
}
