import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import SearchForm from '../SearchForm';
import RefineFlightSearch from '../RefineFlightSearch';

/**
 * A SearchContainer object
 */
export class SearchContainer extends Component {
    constructor() {
        super();

        this.state = {
            activeItem: 'One way'
        }

        this.handleItemClick = this.handleItemClick.bind(this);
    };

     /**
	 * This method update the search type
	 */
    handleItemClick (e, { name }) {
        this.setState({
            activeItem: name
        });

        this.props.updateFlightType(name === 'Return');
    };

    /**
	 * This method generates a menu for search and fitlers
	 * @returns {ReactElement} search options and filters
	 */
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