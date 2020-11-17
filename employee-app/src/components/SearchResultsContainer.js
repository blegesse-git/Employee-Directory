import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import Header from "./Header"
import API from "../utils/API";

class SearchResultsContainer extends Component {
    state = {
        employee: []
    }

    componentDidMount() {
        this.getEmployee()
    }

    getEmployee = () => {
        API.getEmployee().then(res => this.setState({employee: res.data.results}))
    }

    render() {
        return (
            <div>
                <Header/>
                <SearchForm/>
                <SearchResults/>
                {/* <SearchForm/>
                <SearchResults/> */}

            </div>
        )
    }
};
export default SearchResultsContainer;

