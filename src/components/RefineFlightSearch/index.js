import React, { Component } from 'react';
import RangeSlider from '../RangeSlider';
import { Card } from 'semantic-ui-react';

import { connect } from 'react-redux';
import * as Actions from '../../actions';

import './RefineFlightSearch.css'

class RefineFlightSearch extends Component {
	constructor() {
		super();

		this.updatePriceRange = this.updatePriceRange.bind(this);
	}

	updatePriceRange(name, value) {
		this.props.updatePriceSearch(value);
	}

	render() {
		const priceFilter = this.props.priceRange.filter; 
		const priceSearch = this.props.priceRange.search; 

		return (
			<Card fluid={true}>
				<Card.Content>
					<Card.Header textAlign={'left'}>
						Refine Flight Search
					</Card.Header>
					<div className="refine-search-slider">
						<RangeSlider
							name="Price" 
							range={priceFilter}
							value={priceSearch} updateValue={this.updatePriceRange} />
					</div>
					
				</Card.Content>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	priceRange: state.priceRange
});

export default connect(mapStateToProps, Actions)(RefineFlightSearch);
