import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Blog from "../views/Blog";
import Profile from "../views/Profile";
import AuthContext from "../contexts/Auth";

import Layout from "./Layout";
import routes from "../routes";

export default class App extends Component {
  render() {
    return (
      <AuthContext>
        <Layout>
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.blog} exact component={Blog} />
            <Route path={routes.profile} component={Profile} />
          </Switch>
        </Layout>
      </AuthContext>
    );
  }
}
