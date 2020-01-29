import React from "react";
import logo from "./logo.svg";
import Footer from "./components/Footer";
import Table from "./components/Table";


import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Navbar,
  Nav
} from "react-bootstrap";

import "./App.css";

//Pulled from https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg

//Also pulled from https://codesandbox.io/s/practical-nightingale-m2b5n

function App() {
  const [data, setData] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setData(event.target.value);
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Welcome to the Employee Directory
        </Navbar.Brand>
        <Nav className="mr-auto" />
      </Navbar>

      <div className="App">
        <input
          type="text"
          placeholder="Search"
          value={data}
          onChange={handleChange}
        />
        <ul>{searchResults.map(item => <li>{item}</li>)}</ul>
      </div>

      <Table />

      <Footer />
    </div>
  );
}

export default App;
