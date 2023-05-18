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
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/"); //해쉬가 안들어있을 경우 해쉬를 자동 추가
  }

  const routerView = document.querySelector("router-view");
  //http://localhost:123/#?about?name=rami
  //#/about?name=rami
  const [hash, queryString = ""] = location.hash.split("?");

  // a=123&b=456
  // ['a=123, b= 456'] 이걸
  // { a: '123', b: '456'}로 변환
  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {}); //acc 누적이되는 변수, cur 현재 값
  history.replaceState(query, "");

  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);

  //페이지가 바꼈을때 페이지 상단으로 이동하기
  window.scrollTo(0, 0); //페이지의 스크롤 조정
}
export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

//// Store ////
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key], // state['message']
        //this.state에 지정하는 key값을 사용할때 동작
        set: (val) => {
          //this.state에 특정 속성에대한 값을 할당할때 사용
          state[key] = val;
          //this.observers['message']()
          // this.observers[key](); //message가 등록된 하나의 객체데이터
          this.observers[key].forEach((observer) => observer(val));
          //forEach로 각각의 콜백함수만큼 반복
        },
      });
    }
  }
  subscribe(key, cb) {
    //{ message: [cb1, cb2, cb3...] }
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
    //this.observers['message'] = () => {}
    //{ message: () => {} } -> 하나의 함수만 등록 가능
    //{ message: [() => {}, () => {}, () => {}] } ->배열데이터로 여러개의 함수 가능
    // this.observers[key] = cb;
  }
}
