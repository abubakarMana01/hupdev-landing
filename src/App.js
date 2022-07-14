import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "components";
import { About, ContactUs, Home, Services, Work } from "pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
