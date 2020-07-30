import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import KakaoCallback from "./KakaoCallback";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/auth/kakao" component={KakaoCallback} />
    </Router>
  );
}

export default App;
