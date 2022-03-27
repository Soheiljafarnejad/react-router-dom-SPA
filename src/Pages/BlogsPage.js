import { Link } from "react-router-dom";

const BlogsPage = () => {
  const items = [
    { to: "/blogs/1", title: "blog - 1" },
    { to: "/blogs/2", title: "blog - 2" },
    { to: "/blogs/3", title: "blog - 3" },
    { to: "/blogs/4", title: "blog - 4" },
  ];
  return (
    <ul>
      <li>
        <h1>Welcome Blogs Page.</h1>
      </li>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <Link to={{ pathname: item.to, search: "sort=name&age=20" }}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BlogsPage;
