import { Component } from "../core/rami";

export default class Home extends Component {
  render() {
    this.el.innerHTML = /* html */ `
        <h1>Home Page!</h1>
        `;
  }
}