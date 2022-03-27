import { Link, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const Blog = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const { search } = useLocation();

  const parsed = queryString.parse(search);
  console.log(parsed);

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
