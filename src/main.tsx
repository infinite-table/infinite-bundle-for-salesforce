import React from "react";
import ReactDOM from "react-dom/client";

// const React = (window as any).React;
// const ReactDOM = (window as any).ReactDOM;

// require = (name: string) => window[name] || oldRequire(name);
import App from "./App.tsx";
import "./index.css";

// // ReactDOM.createRoot(document.getElementById("root")!).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// //@ts-ignore ignore
(window as any).mountApp = (el: any) => {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
