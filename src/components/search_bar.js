import React, { Component } from 'react';
//what the curly braces are doing: const Component = React.Component

class SearchBar extends Component {
    constructor(props) {
        super(props); //calling parent method of Component

        this.state = { term: '' };
    }

    // component rerenders everytime event sets the state
    render() {
        return (
            <div className='search-bar'>
                <input 
                    onChange={e => this.onInputChange(e.target.value)}
                    value={this.state.term}
                />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;