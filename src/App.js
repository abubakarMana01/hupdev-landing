import { HashRouter, Routes, Route } from "react-router-dom";

import { Footer } from "components";
import { About, ContactUs, Home, Services, Work } from "pages";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
