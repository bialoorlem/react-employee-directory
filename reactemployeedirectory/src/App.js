import React from 'react';
import logo from './logo.svg';
import Footer from './components/Footer'

import { Form, Button, FormGroup, FormControl, ControlLabel, Navbar, Nav } from "react-bootstrap";

import './App.css';


function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
      <Footer/>
    </div>
  );
}

export default App;
