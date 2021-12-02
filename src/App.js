import MainPage from "./screens/MainPage";
import RankPage from "./screens/RankPage";
import ErrorPage from "./screens/ErrorPage";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get("page");

function App() {
  if (page == "rank") {
    return <RankPage />;
  } else {
    return <MainPage />;
  }
}

export default App;
