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
    </div>
  )
}

export default SearchResults;