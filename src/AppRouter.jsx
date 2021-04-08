import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Subscription from "./pages/subscription/SubscriptionViewAll";
import SubscriptionCreate from "./pages/subscription/SubscriptionCreate";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/subscription">
            <Subscription />
          </Route>
          <Route path="/subscription-create">
            <SubscriptionCreate />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
