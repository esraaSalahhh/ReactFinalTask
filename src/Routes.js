import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import { Login } from "./Login/Login";
import { Todo } from "./Todo/Todo";
import About from "./About/About";
import Books from "./Books/Books";
import Counter from "./Counter/Counter";
import Products from "./Products/Products";
import CounterContext from "./CounterUseContext/CounterUseContext";

export default function Routes() {
  return (
    <Suspense fallback="loading">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/todo" exact component={Todo} />
        <Route path="/about" exact component={About} />
        <Route path="/books" exact component={Books} />
        <Route path="/counter" exact component={Counter} />
        <Route path="/products" exact component={Products} />
        <Route path="/countercontext" exact component={CounterContext} />

      </Switch>
    </Suspense>
  );
}
