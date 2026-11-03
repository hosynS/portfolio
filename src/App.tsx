import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  // Certifications,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import CursorEffect from "./components/atoms/CursorEffect";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: true, anchors: true, allowNestedScroll: true }}>
      <BrowserRouter>
        <CursorEffect />
        <div className="bg-primary relative z-0 overflow-x-hidden">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Experience />
          <Works />
          {/* <Certifications /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
};

export default App;
