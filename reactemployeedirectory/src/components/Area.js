
import React, { Component } from "react";

class TableExp extends Component {
  constructor() {
    super();

    this.state = {
      tableData: [
        {
          resourceID: "",
          resourceType: "",
          tenantName: "",
          dealerID: "",
          status: "",
          logFilePath: "",
          supportPerson: "",
          lastUpdatedTime: ""
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("http://private-9ff5e-stackoverflow.apiary-mock.com/questions", {
        responseType: "json"
      })
      .then(response => {
        this.setState({ tableData: response.data });
      });
  }

  render() {
    const { tableData } = this.state;

    return (
      <ReactTable.default
        data={tableData}
        columns={[
          {
            Header: "Details",
            columns: [
              {
                Header: "Tenant Name",
                accessor: "tenantName"
              },
              {
                Header: "Support Engineer",
                id: "supportEngineer",
                accessor: d => d.supportPerson
              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Dealer ID",
                accessor: "dealerID"
              },
              {
                Header: "Status",
                accessor: "status"
              }
            ]
          },
          {
            Header: "Logs",
            columns: [
              {
                Header: "File Path",
                accessor: "logFilePath"
              }
            ]
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

ReactDOM.render(
  <div>
    <TableExp />
  </div>,
  document.getElementById("root")
);
