import React from "react";
import ReactDOM from "react-dom/client";

/**
 * render sub-apps
 */
function Render(props: { loading: boolean }) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

export default function render({ loading }: { loading: boolean }) {
  ReactDOM.createRoot(document.getElementById("subapp-container")!).render(
    <React.StrictMode>
      <Render loading={loading} />
    </React.StrictMode>
  );
}
