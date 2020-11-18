import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div >

      

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
        {props.results.map(result => (
          <tr key={result.key}>
            <th scope="row"><img src={result.picture.thumbnail} alt={result.name.first} /></th>
            <td>{result.name.first} {result.name.last}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.date}</td>
          </tr>
        ))}
    
        </tbody>
      </table>
        
        {/* <div className="container">
          <div className="row justify-content-md-center">
            <div className="col">
              
            </div>
            <div className="col">
              Name
            </div>
            <div className="col">
              Phone
            </div>
            <div className="col-md-auto">
              Email
            </div>
            <div className="col">
              DOB
            </div>


          </div>

        </div> */}

        {/* <div className="container">
        {props.results.map(result => (
          <div className="row justify-content-md-center" key={result.key}>
            <div className="col">
              <img src={result.picture.thumbnail} alt={result.name.first} />
            </div>
            <div className="col">
              {result.name.first} {result.name.last}
            </div>
            <div className="col">
              {result.phone}
            </div>
            <div className="col-md-auto">
              {result.email}
            </div>
            <div className="col">
             {result.dob.date}
            </div>


          </div>

          
        
        ))}
        </div>
         */}
        {/* <ul className="list-group-flush list-group-xl" id="title">
            {props.results.map(result => (
               <li className="list-group-item flex-fill" key={result.id}>
                   <img src={result.picture.thumbnail} alt={result.name.first} />
                   {result.name.first}
                   {result.phone}
                   {result.email}
                </li>
               
            ))} */}
            {/* <li className="list-group-item flex-fill">{props.picture}</li>
            <li className="list-group-item flex-fill">{props.name}</li>
            <li className="list-group-item flex-fill">{props.phone}</li>
            <li className="list-group-item flex-fill">{props.email}</li>
            <li className="list-group-item flex-fill">{props.dob}</li> */}
        {/* </ul> */}

    </div>
  )
}

export default SearchResults;