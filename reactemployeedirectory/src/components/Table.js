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
                    <td>First Name</td>
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


//Results objects found through https://randomuser.me/documentation#howto

// {
//   "results": [
//     {
//       "gender": "male",
//       "name": {
//         "title": "mr",
//         "first": "brad",
//         "last": "gibson"
//       },
//       "location": {
//         "street": "9278 new road",
//         "city": "kilcoole",
//         "state": "waterford",
//         "postcode": "93027",
//         "coordinates": {
//           "latitude": "20.9267",
//           "longitude": "-7.9310"
//         },
//         "timezone": {
//           "offset": "-3:30",
//           "description": "Newfoundland"
//         }
//       },
//       "email": "brad.gibson@example.com",
//       "login": {
//         "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
//         "username": "silverswan131",
//         "password": "firewall",
//         "salt": "TQA1Gz7x",
//         "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
//         "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
//         "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
//       },
//       "dob": {
//         "date": "1993-07-20T09:44:18.674Z",
//         "age": 26
//       },
//       "registered": {
//         "date": "2002-05-21T10:59:49.966Z",
//         "age": 17
//       },
//       "phone": "011-962-7516",
//       "cell": "081-454-0666",
//       "id": {
//         "name": "PPS",
//         "value": "0390511T"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "IE"
//     }
//   ],
//   "info": {
//     "seed": "fea8be3e64777240",
//     "results": 1,
//     "page": 1,
//     "version": "1.3"
//   }
// }
