import React, {Component} from "react";
import "./App.css";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes.js";

export default class App extends Component {
  render () {
    return (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Fisher Bookstore</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link href="/books">Books</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link href="/authors">Authors</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>

        </Navbar>
        <Routes />
      </div>
    );
  }
}
