import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import SearchForm from '../SearchForm';

class SearchContainer extends Component {

    constructor() {
        super();

        this.state = {
            activeItem: 'One way'
        }

        this.handleItemClick = this.handleItemClick.bind(this);
    };

    handleItemClick (e, { name }) {
        this.setState({
            activeItem: name
        });
    };

    render () {
        return (
            <div>
                <Menu tabular>
                    <Menu.Item name='One way' active={this.state.activeItem === 'One way'} onClick={this.handleItemClick} />
                    <Menu.Item name='Return' active={this.state.activeItem === 'Return'} onClick={this.handleItemClick} />
                </Menu>
                <SearchForm />
            </div>
        );
    }
}

export default SearchContainer;