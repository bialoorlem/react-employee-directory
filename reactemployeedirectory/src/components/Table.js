import React, { useState, useEffect } from 'react';
import api from './Api';
import axios from 'axios';



export default function Table() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("url")
    .then(res=>setData(res))


  }, []
);

  return (

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>  

//{data.map} will need this to refer to objects in the API. Will need to look at the object structure.
  
      
    
  );
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

