import { Link } from "react-router-dom";

const BlogsPage = () => {
  return (
    <ul>
      <li>
        <h1>Welcome Blogs Page.</h1>
      </li>
      <li>
        <Link to="/blogs/1">blog - 1</Link>
      </li>
      <li>
        <Link to="/blogs/2">blog - 2</Link>
      </li>
      <li>
        <Link to="/blogs/3">blog - 3</Link>
      </li>
    </ul>
  );
};

export default BlogsPage;
