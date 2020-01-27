import React from 'react';
import logo from './logo.svg';
import Footer from './components/Footer';
import Table from './components/Table';
import Api from './components/Api';

import { Form, Button, FormGroup, FormControl, ControlLabel, Navbar, Nav } from "react-bootstrap";

import './App.css';


function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Welcome to the Employee Directory</Navbar.Brand>
    <Nav className="mr-auto">

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>


<Table />




      <Footer/>
    </div>
  );
}

export default App;
