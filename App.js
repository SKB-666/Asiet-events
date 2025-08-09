import React from "react";
import ArtisticHeader from "./component/header";
import Home from "./component/fun";
import Certificates from "./component/login_page";
import ProductGrid from "./component/card";

function App() {
  return (
    <div>
      <ArtisticHeader />
      <div style={{ paddingTop: "0vh" }}>
        <Home />
        <ProductGrid />
        <Certificates />
      </div>
    </div>
  );
}

export default App;