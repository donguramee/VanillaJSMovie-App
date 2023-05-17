import { Component } from "../core/rami";
export default class FruitItem extends Component {
  constructor(payloard) {
    super({
      tagName: "li",
      props: payloard.props,
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
    <span>${this.props.name}</span>
    <span>${this.props.price}</span>`;

    this.el.addEventListener("click", () => {
      console.log(this.props.name, this.props.price);
    });
  }
}
