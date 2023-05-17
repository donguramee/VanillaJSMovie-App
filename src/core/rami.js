//// Component ////
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload; //tagName에 아무런 요소가 없으면 div로 기본값 설정
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    // ...
  }
}

//// Router ////
export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(router);
    });
    routeRender(routes);
  };
}
