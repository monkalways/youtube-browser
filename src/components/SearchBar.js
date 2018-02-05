import React, { Component } from 'react';

import { Input, Segment } from 'semantic-ui-react';

class SearchBar extends Component {
    state = { 
        term: ''
    };

    handleChange = (event, data) => {
        const term = data.value;
        this.setState(() => ({ term }));
        this.props.onTermChange(term);
    };

    render() {
        return (
            <div>
                <Input 
                    className='icon'
                    icon='search' 
                    placeholder='Search...'
                    value={this.state.term}
                    fluid
                    onChange={this.handleChange} />
            </div>
        );
    }
}

export default SearchBar;