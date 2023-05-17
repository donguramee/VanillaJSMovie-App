import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
root.append(new App().el);

router(); //페이지인 라우터가 루트위로 올라가게되면 아직 생성 전이라 에러가 나게됨
