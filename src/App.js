import { useEffect } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

{
  /* <Route path="" Component={About} />; */
}

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
// Link змінює location (host:port/location)
// Router підписаний на зміну location
// Коли location змінюється, то Router шукає відповідрний Router
// і виводе з нього element / Component
export default App;

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  });
  return (
    <div>
      404 This page is not exist yet
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
