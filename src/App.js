import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Demos from "./components/demos/Demos";
import Footer from "./components/footer/Footer";

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"}>
              <Home />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/about"}>
              <About />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/projects"}>
              <Projects />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/demos"}>
              <Demos />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
