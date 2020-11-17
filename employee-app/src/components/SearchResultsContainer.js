import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import Header from "./Header"
import API from "../utils/API";

class SearchResultsContainer extends Component {
    state = {
        search: "",
        results: []

    };
    

    componentDidMount() {
        this.getEmployee()
       
    }

    getEmployee = () => {
        API.getEmployee().then(res => 
            this.setState({ results: res.data.results}))
        .catch(err => console.log(err));
        

    }

    render() {
        return (
            <div>
                <Header/>
                <SearchForm/>
                <SearchResults results= {this.state.results}/>
                {/* <SearchForm/>
                <SearchResults/> */}

            </div>
        )
    }
};
export default SearchResultsContainer;

