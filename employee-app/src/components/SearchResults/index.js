import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div >
        <ul className="list-group list-group-horizontal-xl" id="title">
            <li className="list-group-item flex-fill">Image</li>
            <li className="list-group-item flex-fill">Name</li>
            <li className="list-group-item flex-fill">Phone</li>
            <li className="list-group-item flex-fill">Email</li>
            <li className="list-group-item flex-fill">DOB</li>
        </ul>
        <ul className="list-group-flush list-group-xl" id="title">
            {props.results.map(result => (
               <li className="list-group-item flex-fill" key={result.id}>
                   <img src={result.picture.thumbnail} alt={result.name.first} />
                   {result.name.first}
                   {result.phone}
                   {result.email}
                </li>
               
            ))}
            {/* <li className="list-group-item flex-fill">{props.picture}</li>
            <li className="list-group-item flex-fill">{props.name}</li>
            <li className="list-group-item flex-fill">{props.phone}</li>
            <li className="list-group-item flex-fill">{props.email}</li>
            <li className="list-group-item flex-fill">{props.dob}</li> */}
        </ul>

    </div>
  )
}

export default SearchResults;