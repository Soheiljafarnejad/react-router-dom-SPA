import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome Home Page.</h1>
      <Link to="/about-us">about us</Link>
    </div>
  );
};

export default HomePage;
