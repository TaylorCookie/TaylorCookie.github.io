import Navbar from "./components/ui/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Demos from "./components/demos/Demos";
import ContactForm from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";

import "./App.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basname={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/demos">
              <Demos />
            </Route>
            <Route path="/contact">
              <ContactForm />
            </Route>
          </Switch>
        </div>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
