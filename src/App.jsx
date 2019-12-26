import React from "react";
import "./common/reset.scss";
import sty from "./App.module.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={sty.app}>
      <Header />
    </div>
  );
}

export default App;
