import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import AboutUsPage from "./AboutUsPage";
import HomePage from "./HomePage";
const PageApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default PageApp;
