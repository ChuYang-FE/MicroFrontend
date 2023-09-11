// import "./index.css";
import {
  initGlobalState,
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
} from "qiankun";

import render from "./render/ReactRender";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Step 1 init app（optional）
 */

render({ loading: false });

/**
 * Step 2 register micro-app
 */

registerMicroApps([
  {
    name: "react16",
    entry: "//localhost:7100",
    container: "#subapp-viewport",
    activeRule: "/react16",
  },
  {
    name: "vue3",
    entry: "//localhost:7105",
    container: "#subapp-viewport",
    activeRule: "/vue3",
  },
]);

const { onGlobalStateChange, setGlobalState } = initGlobalState({});

onGlobalStateChange((value, prev) =>
  console.log("[onGlobalStateChange - master]:", value, prev)
);

// setGlobalState({
//   ignore: "master",
//   user: {
//     name: "master",
//   },
// });

/**
 * Step 3 set default mount app
 */
setDefaultMountApp("/react16");

/**
 * Step 4 start app
 */
start();

runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
