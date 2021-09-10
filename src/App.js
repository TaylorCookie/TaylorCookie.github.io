import Navbar from "./components/ui/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import ContactForm from "./components/contact/Contact";

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
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <ContactForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
