import React from "react";
import Page from "./components/Page";

import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import "aos/dist/aos.css";
import About from "./components/About";
import Rental from "./components/Rental/Rental";

function App() {
  return (
    <Page>
      <Rental />
    </Page>
  );
}

export default App;
