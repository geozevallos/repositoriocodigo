import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
import {NavLink} from 'react-router-dom';

const AdminHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/admin" className="nav-link" activeClassName={"active"}>Dashboard</NavLink>
          <NavLink to="/admin/mesa" className="nav-link" activeClassName={"active"}>Mesas</NavLink>
          <NavLink to="/admin/plato" className="nav-link" activeClassName={"active"}>Platos</NavLink>
          <NavLink to="/admin/plato" className="nav-link" activeClassName={"active"}>Pedidos</NavLink>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminHeader;
