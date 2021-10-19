import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import Detail from "../pages/Detail";
import { Router } from "react-router";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        {/* 이거 /posts로 바꿔야하는건가요? */}
        <Route path="/postwrite" exact component={PostWrite} />
        <Route path="/detail/:postId" exact component={Detail} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
