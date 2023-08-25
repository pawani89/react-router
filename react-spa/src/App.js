import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Learn from "./components/Learn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/myapps">
          <Route index element={<Learn />}></Route>
        </Route> */}
        <Route
          path="/myapps"
          element={<Navigate replace to="/learn" />}
        ></Route>
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />} />
          <Route path="bundles" element={<Bundles />} />
        </Route>
      </Routes>
    </Router>
  );
}

const Courses = () => {
  return <h4> Here are the courses! </h4>;
};
const Bundles = () => {
  return <h4> Here are the Bundles! </h4>;
};
export default App;
