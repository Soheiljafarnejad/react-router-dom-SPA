import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  const id = parseInt(params.id);
  return (
    <div>
      <h2>blog-{id}</h2>
      <Link to={`/blogs/${id + 1}`}>Next page</Link>
      <Link style={{ display: "block" }} to="/blogs">
        go to blogs
      </Link>
    </div>
  );
};

export default Blog;
