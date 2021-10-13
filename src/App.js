import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OrderSummary from "./pages/OrderSummary";
import StatsPreview from "./pages/StatsPreview";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fem/order-summary" component={OrderSummary} />
        <Route exact path="/fem/stats-preview" component={StatsPreview} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
