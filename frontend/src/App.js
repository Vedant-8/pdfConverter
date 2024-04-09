import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Merge, Split } from "./components";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/merge" element={<Merge />} />
      <Route path="/split" element={<Split />} />
    </Routes>
  </BrowserRouter>
);

export default App;
