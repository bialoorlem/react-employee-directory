import React, { Component, useState, useEffect } from "react";
import axios from "axios";



function Table() {
  // Declare a new state variable, which we'll call "count"
  const [eeInfo, setEEInfo] = useState([]);
  
useEffect(() =>{
  axios.get("http://private-9ff5e-stackoverflow.apiary-mock.com/questions")

  .then((res)=>{
    setEEInfo(res.data)
  })

}, [])

  return (
    <div>
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
    </div>
  );
}

export default Table