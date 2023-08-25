import { Link, Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <>
      <h1>Courses</h1>
      <h4>we have all the courses here</h4>
      <Link to="/learn/courses">COURSES</Link> |
      <Link to="/learn/bundles">BUNDLES</Link>
      <Outlet />
    </>
  );
};

export default Learn;
