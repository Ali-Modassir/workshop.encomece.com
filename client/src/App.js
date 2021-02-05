import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Styling
import "./assets/css/style.css"; //css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //Bootstrap

//Components
import Navbar from "./Components/Navbar";
import Navbar1 from "./Components/Navbar1";
import Footer from "./Components/Footer";

//Pages
import WorkshopHome from "./views/WorkshopHome";
import Register from "./views/Register";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar1 />
            <WorkshopHome />
            <Footer />
          </Route>
          <Route path="/register" exact>
            <Navbar1 fixed />
            <Register />
            <Footer />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
