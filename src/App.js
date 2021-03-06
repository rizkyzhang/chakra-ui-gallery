import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OrderSummary from "./pages/OrderSummary";
import StatsPreview from "./pages/StatsPreview";
import ThreeColsPreview from "./pages/ThreeColsPreview";
import Home from "./pages/Home";
import ProfileCard from "./pages/ProfileCard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fem/order-summary" component={OrderSummary} />
        <Route exact path="/fem/stats-preview" component={StatsPreview} />
        <Route
          exact
          path="/fem/3-columns-preview"
          component={ThreeColsPreview}
        />
        <Route exact path="/fem/profile-card" component={ProfileCard}></Route>
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
