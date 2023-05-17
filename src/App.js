// export default class App {
//   constructor() {
//     this.el = document.createElement("div");
//     this.el.textContent = "Hello, world!";
//   }
// }
// import { Component } from "./core/rami";

// export default class App extends Component {
//   constructor() {
//     super(); //tagName에 새로운 내용을 쓰지않으면 자동으로 div로 적용
//   }
//   render() {
//     //화면에 출력한다
//     this.el.textContent = "Hello, world!"; //이 함수의 내용을
//   }
// }

//input 요소 만들기
// import { Component } from "./core/rami";

// export default class App extends Component {
//   constructor() {
//     super({
//       state: {
//         inputText: "",
//       },
//     });
//   }
//   render() {
//     //화면에 출력한다
//     this.el.classList.add("search");
//     this.el.innerHTML = /* html */ `
//     <input />
//     <button>Click!</button>
//     `;

//     const inputEl = this.el.querySelector("input");
//     inputEl.addEventListener("input", () => {
//       this.state.inputText = inputEl.value;
//     });

//     const buttonEl = this.el.querySelector("button");
//     buttonEl.addEventListener("click", () => {
//       console.log(this.state.inputText);
//     });
//   }
// }

// import { Component } from "./core/rami";
// import FruitItem from "./components/FruitItem"; //FruitItem은 클래스 이므로 new키워드를 붙여 인스턴스를 만들어줌

// export default class App extends Component {
//   constructor() {
//     super({
//       state: {
//         fruits: [
//           { name: "Apple", price: 1000 },
//           { name: "Banana", price: 2000 },
//           { name: "Cherry", price: 3000 },
//         ],
//       },
//     });
//   }
//   render() {
//     console.log(this.state.fruits);
//     this.el.innerHTML = /* html */ `
//     <h1>Fruits</h1>
//     <ul></ul>
//     `;
//     const ulEl = this.el.querySelector("ul");
//     ulEl.append(
//       ...this.state.fruits.map(
//         (fruit) =>
//           new FruitItem({
//             props: {
//               name: fruit.name,
//               price: fruit.price,
//             },
//           }).el
//       )
//     );
//   }
// }
import { Component } from "./core/rami";
import TheHeader from "./components/TheHeader";

export default class App extends Component {
  render() {
    const routerView = document.createElement("router-view"); //두개이상의 단어를 대쉬기호를 포함하여 만들면 표준 요소로 인식을 안함
    this.el.append(
      new TheHeader().el, //클래스로 사용하려면 new키워드 사용 후 .el
      routerView
    );
  }
}
