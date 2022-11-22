import React from "react";
import "./App.less";
import "antd/dist/antd.less";
// import LayoutDashboard from "./containers/LayoutDashboard";


// Pages
import { MainRoutes } from "./Routes";

function App() {
  return (
    <>
    <MainRoutes />
    </>
  );
}

export default App;
