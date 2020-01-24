import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    const columns = [
      {
        dataField: "id",
        text: "Product ID"
      },
      {
        dataField: "name",
        text: "Product Name"
      },
      {
        dataField: "price",
        text: "Product Price"
      }
    ];
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <BootstrapTable keyField="id" data={text} columns={columns} />
        // <ul>
        //   {items.map(item => (
        //     <li key={item.name}>
        //       {item.name.first} {item.name.last}
        //     </li>
        //   ))}
        // </ul>
      );
    }
  }
}

export default Example;
