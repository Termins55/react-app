import { useEffect } from "react";
import {
  Link,
  NavLink,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

{
  /* <Route path="" Component={About} />; */
}

const linkStyle = ({ isActive }) =>
  isActive ? { border: "1px solid purple" } : {};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index path="/" element={<Home />} />
          <Route path="/partners/*" element={<PartnersPage />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
// Link змінює location (host:port/location)
// Router підписаний на зміну location
// Коли location змінюється, то Router шукає відповідрний Router
// і виводе з нього element / Component
export default App;

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/partners" style={linkStyle}>
              Partners
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

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

function PartnersPage() {
  // /partners/partners1
  // /partners/partners2

  return (
    <div>
      <h1>Partners</h1>
      <nav>
        <NavLink to="partner1" style={linkStyle}>
          Partner 1
        </NavLink>
        <NavLink to="partner2" style={linkStyle}>
          Partner 2
        </NavLink>
      </nav>
      <Routes>
        <Route path="partner1" element={<div>Partner 1</div>} />
        <Route path="partner2" element={<div>Partner 2</div>} />
      </Routes>
    </div>
  );
}

function BasePage() {
  return (
    <>
      <Header />
      {/* вбудуй що потрібно */}
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
