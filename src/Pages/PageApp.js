import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import AboutUsPage from "./AboutUsPage";
import Blog from "./Blog";
import BlogsPage from "./BlogsPage";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import PostPage from "./PostPage";
import ProfilePage from "./ProfilePage";
const PageApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/post/*" element={<PostPage />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="dashboard" element={<h2>dashboard</h2>} />
            <Route path="download" element={<h2>download</h2>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default PageApp;
