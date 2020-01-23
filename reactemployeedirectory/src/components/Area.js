import React from 'react';

function ResultList(props) {
  return (
    <ul className="list-group">

      {props.results.map(result => (

          
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

//Jquery Documentation pulled from https://randomuser.me/documentation#howto

//
    //$.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

export default ResultList;