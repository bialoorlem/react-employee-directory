import React, { useState, useEffect } from "react";
// import api from "./Api";
import axios from "axios";


export default function Table() {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  
  

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then(res => {
      console.log("res", res.data.results);
      setData(res.data.results);
    });

    //{data.map} will need this to refer to objects in the API. Will need to look at the object structure.
  }, []);
  console.log("data >>>>> ", data);



  
  
//<button onClick={() => data.sortBy('first')} /> I will need to do something with this sort function
  //Pulled from Jake's GitHub and modified
  
    return (

        
        <table class="table">
            <thead>
                <tr>
                    <td><button onClick={() =>{ 
                        console.log("name array", data)
                        setData(sortName(data))}} />First Name</td>
                    <td>Last Name</td>
                    <td>UID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td><button onClick={() =>{ 
                        console.log("first array", data)
                        setData(sortAge(data))}} />Age</td>
                </tr>
            </thead>
            <tbody>
                {data.map(employee => {
                    
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.login.uuid}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}

//Referred to Jake's GitHub but modified for my own app

  function sortAge(data){

      

      data.sort(function(a,b){
          if(a.dob.age < b.dob.age){
              return -1;
          }else{
              return 1;
          }
      });
      console.log(data)
       return [...data]
        
  }

    function sortName(data){

      

      data.sort(function(a,b){
          if(a.name.first < b.name.first){
              return -1;
          }else{
              return 1;
          }
      });
      console.log(data)
       return [...data]
        
  }

//   function filterName(data){

//       data.filter()

//   }