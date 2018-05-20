import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import FlightList from '../FlightList';
import SearchContainer from '../SearchContainer';
import './FlightSearchEngine.css';

/**
 * A FlightSearchEngine object
 */
class FlightSearchEngine extends Component {
    /**
	 * This method generates a full search engine with filters and resutls
	 * @returns {ReactElement} a search engine element.
	 */
    render () {
        return (
            <Grid stackable>
                <Grid.Row>
                <Grid.Column width={4}>
                    <SearchContainer />
                </Grid.Column>

                <Grid.Column width={12}>
                    <FlightList />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default FlightSearchEngine;