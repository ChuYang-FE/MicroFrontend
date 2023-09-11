import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Divider } from "antd";

import "antd/dist/antd.min.css";
import "./App.css";

import LibVersion from "./components/LibVersion";
import HelloModal from "./components/HelloModal";

import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? "/react16" : "/"}>
      <nav>
        <Link to="/">Home</Link>
        <Divider type="vertical" />
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default function App({ props }) {
  const [name, setName] = useState("subAppName");
  const [count, setCount] = useState(0);

  const { onGlobalStateChange } = props;
  onGlobalStateChange &&
    onGlobalStateChange((value) => {
      setName(value.name);
      setCount(value.baseAppClick);
    });

  // useEffect(() => {
  //   onGlobalStateChange((value) => {
  //     setName(value.name);
  //     setCount(value.baseAppClick);
  //   });
  // }, []);

  return (
    <div className="app-main">
      <div>name: {name}</div>
      <div>count: {count}</div>
      <LibVersion />
      <HelloModal />

      <Divider />

      <RouteExample />
    </div>
  );
}
