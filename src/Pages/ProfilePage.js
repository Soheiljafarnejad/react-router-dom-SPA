import { Link, Outlet } from "react-router-dom";
const ProfilePage = () => {
  return (
    <div>
      <h1>Welcome ProfilePage</h1>
      <ul>
        <li>
          <Link to={"/profile/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/profile/download"}>Download</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
