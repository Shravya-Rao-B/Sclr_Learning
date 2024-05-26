import "./App.css";
import { BrowserRouter } from 'react-router-dom';
// import Gallery from "./Gallery";
// import List from "./List";
// import HandleAllTodos from "./components/Todo/HandleAllTodos";
// import Routing from "./components/Routes/Routing.jsx";
// import Page from "./components/useEffect/Page.jsx";
// import GetData from "./components/useEffect/getUserData/GetData";
import QuickUpdateIssue from "./components/Imdb2/setCount"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Gallery /> */}
      {/* <List /> */}
      {/* <HandleAllTodos /> */}
      {/* <Routing /> */}
      {/* <Page /> */}
      {/* <GetData /> */}
      <QuickUpdateIssue />
    </div>
    </BrowserRouter>
  );
}

export default App;
