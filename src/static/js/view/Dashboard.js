import AbstractView from "./AbstractView.js";

export default class Dashboard extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return '<h1>Welcome back, Dom</h1> <p> <a href="/posts" data-link> View recent posts2</a>';
  }
}
