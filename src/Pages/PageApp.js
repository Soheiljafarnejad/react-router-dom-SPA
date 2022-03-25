import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./AboutUsPage";
import HomePage from "./HomePage";
const PageApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageApp;
