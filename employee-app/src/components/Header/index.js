import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on carrots to filter by heading or use the search box to narrow results</p>
        </div>
    </div>
  );
}

export default Header;