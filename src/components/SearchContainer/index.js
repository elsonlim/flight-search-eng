import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import SearchForm from '../SearchForm';
import RefineFlightSearch from '../RefineFlightSearch';

export class SearchContainer extends Component {

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

        this.props.updateFlightType(name === 'Return');
    };

    render () {
        return (
            <div>
                <Menu tabular>
                    <Menu.Item name='One way' active={this.state.activeItem === 'One way'} onClick={this.handleItemClick} />
                    <Menu.Item name='Return' active={this.state.activeItem === 'Return'} onClick={this.handleItemClick} />
                </Menu>
                <SearchForm />
                <RefineFlightSearch />
            </div>
        );
    }
}

export default connect(null, actions)(SearchContainer);