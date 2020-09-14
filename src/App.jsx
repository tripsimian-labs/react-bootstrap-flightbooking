import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BreadcrumbnMenu } from "./component/navigation/breadcrumbmenu";
import { NavigationMenu } from "./component/navigation/navigationmenu";
import { NavigationController } from "./component/navigation/navigationcontroller";
import { Footer } from "./component/common/footer";

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default function App() {
  return (
    <Router>
      <header className="container">
        <BreadcrumbnMenu />
      </header>
      <main role="main" className="container">
        <div className="jumbotron">
            <NavigationController />
        </div>`
      </main>
     <footer className="container footer">
        <Footer/>
    </footer>
    </Router>
  );
}
