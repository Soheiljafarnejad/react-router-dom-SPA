import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  return (
    <div>
      <h2>blog-{params.id}</h2>
      <Link to="/blogs">gi to blogs page</Link>
    </div>
  );
};

export default Blog;
