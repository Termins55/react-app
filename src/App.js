import { useEffect } from "react";
import CounterH from "./components/CounterH";
import StopWatchH from "./components/StopWatchH";

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Components() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <ol>
        <li>
          <Link to={`${url}/counterh`}>CounterH</Link>
        </li>
        <li>
          <Link to={`${url}/stopwatchh`}>SwopWatchH</Link>
        </li>
      </ol>
      <Switch>
        <Route path={`${path}/counterh`}>
          <CounterH />
        </Route>
        <Route path={`${path}/stopwatchh`}>
          <StopWatchH />
        </Route>
        <Route path={`${path}/*`}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

function Contacts() {
  return <div>Contacts</div>;
}

function NotFound() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push("/"), 5000);
  });
  return <div>404 Not Found</div>;
}
