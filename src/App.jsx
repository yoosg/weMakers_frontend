import React from "react";
import "./common/reset.scss";
import sty from "./App.module.scss";
import ProductInformation from "./pages/ProductInformation";
function App() {
  return (
    <div className={sty.app}>
      <ProductInformation />
    </div>
  );
}

export default App;
